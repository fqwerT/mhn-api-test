import { TableType } from "../../interface/interface";
import * as XLSX from "xlsx";

export const handleDownloadFile = (jsonData: any, tabs: string[]) => {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(jsonData);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `dataTest.xlsx`);

  //  });
  XLSX.writeFile(workbook, "data.xlsx");
};

export const submiteFormula = (data: any, setState: any) => {
  fetch("http://localhost:8000/formula", {
    method: "POST",
    body: JSON.stringify({ data: data }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res: any) => {
      return res.json();
    })
    .then((res: any) => {
      setState({ data: res.result });
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
