import React from "react";
import { StyledDashboardWrap } from "../dashboard/style";
import { Link } from "react-router-dom";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { setName, setTable } from "../../store/table/table";
import { FileUploader } from "../fileuploader/fileuploader";
import { StyledButton } from "../ui/button/button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
export const TablesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const testingTable = () => {
    navigate("/table");
  };

  return (
    <StyledDashboardWrap>
      <S.StyledTablesHeader>
        <TextField
          id="outlined-basic"
          label="имя таблицы"
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <FileUploader />
      </S.StyledTablesHeader>
      <S.StyledTsblesMenu>
        <S.StyledTablesList>
          <div onClick={() => testingTable()}>
            <h3>Тестовая таблица</h3>
            <p>01.11.2023</p>
          </div>
        </S.StyledTablesList>
      </S.StyledTsblesMenu>
    </StyledDashboardWrap>
  );
};
