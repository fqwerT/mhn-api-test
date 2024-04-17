export const buttonClickCallback = (
  reftable: React.MutableRefObject<any>,
  utils: any,
  writeFile: (data: any, filename: string) => void,
  name: string
) => {
  const hot = reftable.current.hotInstance;
  const data = hot.getData();
  const sheetData = [];
  sheetData.push(...data);
  const sheet = utils.aoa_to_sheet(sheetData);
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, sheet, "Sheet1");
  writeFile(workbook, `${name}.xlsx`);
};
