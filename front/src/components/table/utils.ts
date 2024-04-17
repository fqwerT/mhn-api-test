import { TableType } from "../../interface/interface";
import * as XLSX from "xlsx";
// export const dataClone = (value: TableType) => {
//   let res = [];

//   if (value) {
//     for (let i = 0; i < value.length; i++) {
//       res[i] = [...value[i]];
//     }
//   }

//   return res;
// };

export const handleDownloadFile = (jsonData: any,tabs:string[]) => {
  const workbook = XLSX.utils.book_new();
  tabs.forEach((element) => {
    const worksheet = XLSX.utils.json_to_sheet(jsonData[element]);
    XLSX.utils.book_append_sheet(workbook, worksheet, element);
  });

  // const worksheet = XLSX.utils.json_to_sheet(jsonData['MD']);

  // // Создаем новую книгу Excel
   //const workbook = XLSX.utils.book_new();
  // XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Сохраняем книгу Excel в файл
  XLSX.writeFile(workbook, "data.xlsx");
};
