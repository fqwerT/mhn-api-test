import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { useContext } from "react";
import { MyContext } from "../DataProvider/DataProvider";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import * as S from "./style";
import { getCellValue } from "./utils";
import { CellSearchResult } from "../CellSearchResult/CellSearchResult";
import InputAdornment from "@mui/material/InputAdornment";
import { useOutsideKlick } from "../../hooks/useOutsideKlick";

export const CellSearch = () => {
  const [value, setValue] = useState<string | null>(null);
  const { data, updateData } = useContext(MyContext);
  const [open, setOpen] = useState<boolean>(false);
  const [result, setResult] = useState<string[] | number[] | null>(null);

  const handleSearch = (search: string) => {
    setValue(search);
    if (search === "") {
      setResult(null);
    }
    if (search !== value) {
      setResult(null);
    }
  };

  const handleSearchResult = useCallback(
    (target: any, type: string) => {
      if (type === "keyboard" && data.data && target.key === "Enter") {
        getCellValue(data.data, setResult, value);
      }
      if (type === "mouse" && data.data) {
        getCellValue(data.data, setResult, value);
      }
    },
    [value, data]
  );

  const outsideClick = useOutsideKlick(() => setResult(null));

  return (
    <S.StyledSearchCell>
      <Button startIcon={<SearchIcon />} onClick={() => setOpen(!open)}>
        Поиск
      </Button>
      {open && (
        <S.StyledSearchWrap>
          <TextField
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={(e) => handleSearchResult(e, "keyboard")}
            sx={{ width: "100%" }}
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon onClick={(e) => handleSearchResult(e, "mouse")} />
                </InputAdornment>
              ),
            }}
          />

          {result && result.length !== 0 && (
            <S.StyledCellSearchList ref={outsideClick}>
              {result.map((item: string | number, index: string | number) => (
                <CellSearchResult data={item} key={index} />
              ))}
            </S.StyledCellSearchList>
          )}
        </S.StyledSearchWrap>
      )}
    </S.StyledSearchCell>
  );
};
