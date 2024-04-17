import { FileProps } from "../../interface/interface";

export const handleFileUpload = (item: any, setStatus: any, status: any) => {
  const formData = new FormData();
  formData.append("file", item);
  const check = status.some((el) => el.name === item.name);

  if (!check) {
    setStatus((prev) => [
      ...prev,
      {
        status: "pending",
        success: null,
        name: item.name,
      },
    ]);

    fetch("http://localhost:5000/api/parse", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus((prev) =>
          prev.map((el) => {
            if (el.name === item.name) {
              return { ...el, status: "success", success: true, data: data };
            }
            return el;
          })
        );
      })
      .catch((e) => {
        setStatus((prev) =>
          prev.map((el) => {
            if (el.name === item.name) {
              return { ...el, status: "rejected", success: false };
            }
            return el;
          })
        );
      });
  }
};

export const AsyncUploadFiles = (
  data: FileProps[],
  setStatus: any,
  status: FileProps[]
) => {
  Promise.allSettled(
    data.map((item) => {
      handleFileUpload(item, setStatus, status);
    })
  );
};

export const removeDuplicates = (arr: FileProps[]) => {
  let uniqueObj = {};
  let result = [];

  arr.forEach(function (obj: FileProps) {
    if (!uniqueObj[obj.name]) {
      uniqueObj[obj.name] = true;
      result.push(obj);
    }
  });

  return result;
};
