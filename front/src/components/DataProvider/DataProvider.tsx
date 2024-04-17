import { createContext, useState } from "react";

export const MyContext = createContext(null);

// стор который хранит в себе состояние таблицы
export const MyProvider = ({ children }) => {
  const [data, setData] = useState(null);

  // Функция для обновления данных
  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  );
};
