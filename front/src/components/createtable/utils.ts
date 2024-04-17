export const changeCell = (
  id: string | number,
  newStroke: string | null,
  content: string | number | null,
  isOpen: boolean = false,
  setData: React.Dispatch<React.SetStateAction<any[]>>
) => {
  setData((prevData) =>
    prevData.map((item) => {
      if (item.id === id) {
        if (newStroke || newStroke === "") {
          return { ...item, newStroke };
        }
        if (content || content === "") {
          return { ...item, content };
        }
        if (isOpen) {
          return { ...item, isOpen: !item.isOpen };
        }
      }
      return item;
    })
  );
};


export  const createCell = (setData:React.Dispatch<React.SetStateAction<any[]>>,setSelected:React.Dispatch<React.SetStateAction<string>>) => {
    const newId = Date.now().toString();
    setData((prevData) => [
      ...prevData,
      {
        id: newId,
        isOpen: false,
        content: "",
      },
    ]);
    setSelected(newId);
  };

  export const adapterData = (data: any[], stroke: string[]) => {
    const listColumn = [];
    data.map((i) => {
      listColumn.push(i.content);
    });
     return [listColumn, stroke];
  };


