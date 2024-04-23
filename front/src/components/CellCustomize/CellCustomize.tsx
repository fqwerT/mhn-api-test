import { Button, Tooltip } from "@mui/material";
import { TextField } from "@mui/material";
import * as S from "./style";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useCallback, useEffect, useState } from "react";
import { ColorsProps } from "../../interface/interface";
import { useId } from "react";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { setStyledCell } from "../../store/table/table";
import InputLabel from "@mui/material/InputLabel";
import { uid } from "uid";

const colors: ColorsProps[] = [
  { color: "black", id: 1 },
  { color: "gray", id: 2 },
  { color: "white", id: 3 },
  { color: "red", id: 4 },
  { color: "brown", id: 5 },
  { color: "yellow", id: 6 },
  { color: "green", id: 7 },
  { color: "purple", id: 8 },
  { color: "blue", id: 9 },
  { color: "orange", id: 10 },
];

interface CustimizeProps {
  setState: any;
  state: any;
}

export const CellCustomize: React.FC<CustimizeProps> = ({
  setState,
  state,
}) => {
  const styledCell = useAppSelector((state) => state.table.cellStyle);
  const dispatch = useDispatch();
  const [value, setValue] = useState<string | number>(null);
  const setStyleProp = useCallback(
    (type: string, value: any) => {
      setValue(value);
      if (type === "size") {  
        setState({ ...state,  fontSize: `${value}px` });
      }

      if (type === "weight") {
        setState({ ...state, fontWeight: value });
      }

      if (type === "color") {
        setState({ ...state, color: value });
      }
    },
    [state]
  );

  const handleSubmiteStyle = () => {
   dispatch(setStyledCell(state));
  };
  return (
    <S.StyledWrap>
      <S.StyledBlock>
        <TextField
          type="number"
          label="размер шрифта"
          onChange={(e) => setStyleProp("size", e.target.value)}
          size="small"
        />
      </S.StyledBlock>
      <S.StyledBlock>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={value}
          size="small"
          placeholder="Толщина шрифта"
          onChange={(e) => setStyleProp("weight", e.target.value)}
        >
          <MenuItem value={400}>400</MenuItem>
          <MenuItem value={500}>500</MenuItem>
          <MenuItem value={600}>600</MenuItem>
          <MenuItem value={700}>700</MenuItem>
          <MenuItem value={800}>800</MenuItem>
        </Select>
      </S.StyledBlock>
      <S.StyledBlock>
        <S.StyledColorsList>
          {colors.map((item: ColorsProps) => (
            <Tooltip title={`цвет: ${item.color} `}>
              <S.StyledColorButton
                $color={item.color}
                onClick={(e) => setStyleProp("color", item.color)}
                id={String(item.id)}
                key={item.id}
              ></S.StyledColorButton>
            </Tooltip>
          ))}
        </S.StyledColorsList>
      </S.StyledBlock>
      <S.StyledBlock>
        <Button onClick={() => handleSubmiteStyle()}>Сохранить</Button>
      </S.StyledBlock>
    </S.StyledWrap>
  );
};
