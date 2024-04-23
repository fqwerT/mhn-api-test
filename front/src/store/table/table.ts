import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TableType } from "../../interface/interface";
import { ColorsProps } from "../../interface/interface";

interface CellProps {
  col: string | number | null;
    row: string | number | null;
    styles: ColorsProps[] | null;
}
interface CounterState {
  data: TableType;
  name: string;
  uploadStatus: null | string;
  cellStyle: CellProps[] | []
    
  
}

// Define the initial state using that type
const initialState: CounterState = {
  data: null,
  name: null,
  uploadStatus: null,
  cellStyle: [],
};

export const tableSlice = createSlice({
  name: "table",

  initialState,
  reducers: {
    setTable: (state, action) => {
      state.data = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setuploadStatus: (state, action) => {
      state.uploadStatus = action.payload;
    },
    setStyledCell: (state, action) => {
      state.cellStyle = [...state.cellStyle,action.payload]
    },
  },
});

export const { setTable, setName, setuploadStatus, setStyledCell } =
  tableSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectTable = (state: RootState) => state.table.data

export default tableSlice.reducer;
