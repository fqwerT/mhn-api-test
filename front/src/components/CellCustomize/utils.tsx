import * as lodash from "lodash";

export const handleCheckDuplicates = (arg, arg2) => {
  return arg.every((element) => {
    return !lodash.isEqual(element, arg2);
  });
};

export const setValueByType = (
  type: string,
  setState: any,
  state: any,
  value: string | number
) => {
  if (type === "size") {
    setState({ ...state, fontSize: `${value}px` });
  }
  if (type === "weight") {
    setState({ ...state, fontWeight: value });
  }
  if (type === "color") {
    setState({ ...state, color: value });
  }
  if (type === "text-color") {
    setState({ ...state, text_color: value });
  }
};

export const removeLasChange = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return arr;
  }
  return arr.slice(0, -1);
};
