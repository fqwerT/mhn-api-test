import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
//@ts-ignore
import * as XLSX from "xlsx";
import { uid } from "uid";
dotenv.config();

const app: Express = express();
const port = 8000;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Установим заголовки CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.post("/parse", (req: Request, res: Response) => {
  try {
    //@ts-ignore
    const parsedData = new Uint8Array(Object.values(req.body.data));
    const workbook = XLSX.read(parsedData, { type: "buffer" });
    const jsonData = {};
    //@ts-ignore
    workbook.SheetNames.forEach((sheetName) => {
      const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      //@ts-ignore
      jsonData[sheetName] = data;
    });

    const tabs = Object.keys(jsonData);
    let cellValueZero = 0;
    let errorCells = 0;

    tabs.forEach((item) => {
      //@ts-ignore
      jsonData[item].forEach((item) => {
        Object.values(item).forEach((element: any) => {
          if (element === 0) {
            cellValueZero++;
          }
          if (typeof element === "string" && element.includes("#ERROR!")) {
            errorCells++;
          }
        });
      });
    });

    // const JSONTable = tabs.map((item) => {
    //   //@ts-ignore
    //   return jsonData[item].map((item) => {
    //     return { ...item, id: uid() };
    //   });
    // });
    //@ts-ignore
    const arrayTypeTable = jsonData[tabs[0]].map((i) => {
      return Object.values(i);
    });

    const responsePayload = {
      //@ts-ignore
      data: arrayTypeTable,
      tabs: tabs,
      cellvaluezero: cellValueZero,
      errorCells: errorCells,
      status: 200,
    };
    res.status(200).json(responsePayload);
  } catch (e) {
    //@ts-ignore
    res.status(400).json({ error: e.message, status: 400 });
  }
});

app.post("/cellcontent", (req: Request, res: Response) => {
  try {
    const searchValue: string | number = req.body.searchValue;
    const tabs = Object.keys(req.body.data);
    const jsonTable = req.body.data;
    let foundedValue: string[] | number[] = [];

    tabs.forEach((item) => {
      //@ts-ignore
      jsonTable.forEach((item) => {
        //@ts-ignore
        item.forEach((i) => {
          if (String(i[0]).includes(String(searchValue)[0])) {
            //@ts-ignore
            foundedValue.push(i);
          }
        });
        // Object.values(item).forEach((element: any) => {
        //   //@ts-ignore
        //   if (String(element[0]).includes(String(searchValue)[0])) {
        //     //@ts-ignore
        //     foundedValue.push(element);
        //     console.log(element);
        //   }
        // });
      });
    });
    const responsePayload = {
      result: foundedValue.slice(0, 10),
    };

    res.status(200).json(responsePayload);
  } catch (e) {
    //@ts-ignore
    res.status(400).json({ error: e.message, status: 400 });
  }
});

app.post("/formula", (req: Request, res: Response) => {
  try {
    const jsonTable = req.body.data;
    let regEx = /([=!+]+)(\d+)(\D)(\d+)/;
    let numRegEx = /^-?\d*\.?\d+$/;
    //@ts-ignore
    const changed = jsonTable.map((item) => {
      for (let key in item) {
        if (regEx.test(item[key])) {
          const matches = item[key].match(regEx);
          if (matches) {
            const firstArgument = matches[2];
            const secondArgument = matches[4];
            if (numRegEx.test(firstArgument) && numRegEx.test(secondArgument)) {
              item[key] = Number(firstArgument) + Number(secondArgument);
            }
          }
        }
      }

      return item;
    });

    const responsePayload = {
      result: changed,
    };

    res.status(200).json(responsePayload);
  } catch (e) {
    //@ts-ignore
    res.status(400).json({ error: e.message, status: 400 });
  }
});
