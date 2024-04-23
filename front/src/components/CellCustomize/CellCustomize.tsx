import { Button, Tooltip } from "@mui/material";
import { TextField } from "@mui/material";
import * as S from "./style";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useCallback, useEffect, useRef, useState } from "react";
import { ColorsProps } from "../../interface/interface";
import { useOutsideKlick } from "../../hooks/useOutsideKlick";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { deleteLastChange, setStyledCell } from "../../store/table/table";
import InputLabel from "@mui/material/InputLabel";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import UndoIcon from "@mui/icons-material/Undo";
import { CollorPallet } from "../ColorPallet/CollorPallet";
import { handleCheckDuplicates, setValueByType } from "./utils";
import { useMemo } from "react";
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
  const [openPallet, setOpenPallet] = useState<any>({
    background: false,
    text: false,
  });

  const hadleSetValueByType = useCallback(
    (type: string, value: string | number) => {
      setValueByType(type, setState, state, value);
    },
    [state]
  );
  const setStyleProp = useCallback(
    (type: string, value: any) => {
      setValue(value);
      hadleSetValueByType(type, value);
    },
    [state]
  );

  const checkEqual = useMemo(() => {
    return handleCheckDuplicates(styledCell, state);
  }, [styledCell, state]);

  const handleSubmiteStyle = useCallback(() => {
    if (checkEqual) {
      dispatch(setStyledCell(state));
    }
    console.log(state);
  }, [state, styledCell]);

  const handleOpenPallet = useCallback(
    (type: string) => {
      setOpenPallet({ ...openPallet, [type]: !openPallet[type] });
    },

    [openPallet]
  );

  const handleDeleteLastChange = useCallback(() => {
    dispatch(deleteLastChange());
  }, [styledCell]);

  return (
    <S.StyledWrap>
      <S.StyledButtonsControlls>
        <Button onClick={() => handleSubmiteStyle()}>Сохранить</Button>
        <Tooltip title="шаг назад">
          <Button onClick={() => handleDeleteLastChange()}>
            <UndoIcon />
          </Button>
        </Tooltip>
      </S.StyledButtonsControlls>
      <S.StyledCustomizeRow>
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
            sx={{ width: "150px" }}
            placeholder="Толщина шрифта"
            onChange={(e) => setStyleProp("weight", e.target.value)}
          >
            <MenuItem value={800}>жирный</MenuItem>
          </Select>
          <InputLabel>толщина шрифта</InputLabel>
        </S.StyledBlock>
        <S.StyledBlock>
          <S.StyledColorsList>
            <Button
              sx={{ width: "30px", padding: 0 }}
              onClick={() => handleOpenPallet("background")}
            >
              <ColorLensIcon sx={{ width: "30px", height: "30px" }} />
            </Button>
            <S.StyledColorsWrap>
              <CollorPallet
                state={openPallet.background}
                setState={setStyleProp}
                type={"color"}
              />
            </S.StyledColorsWrap>
          </S.StyledColorsList>
          <InputLabel>цвет фона</InputLabel>
        </S.StyledBlock>
      </S.StyledCustomizeRow>
      <S.StyledCustomizeRow>
        <S.StyledBlock>
          <S.StyledColorsList>
            <Button
              sx={{ width: "30px", padding: 0 }}
              onClick={() => handleOpenPallet("text")}
            >
              <ColorLensIcon sx={{ width: "30px", height: "30px" }} />
            </Button>
            <S.StyledColorsWrap>
              <CollorPallet
                state={openPallet.text}
                setState={setStyleProp}
                type={"text-color"}
              />
            </S.StyledColorsWrap>
          </S.StyledColorsList>
          <InputLabel>цвет текста</InputLabel>
        </S.StyledBlock>
      </S.StyledCustomizeRow>
    </S.StyledWrap>
  );
};
