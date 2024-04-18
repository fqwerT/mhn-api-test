export const getCellValue = (
  data: any,
  setState: any,
  value: string | number
) => {
  fetch("http://localhost:8000/cellcontent", {
    method: "POST",
    body: JSON.stringify({ data: data, searchValue: value }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res: any) => {
      return res.json();
    })
    .then((res: any) => {
      //@ts-ignore
      console.log(res);
      if (res.result) {
        setState(res.result);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
