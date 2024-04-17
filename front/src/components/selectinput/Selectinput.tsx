import React, { memo } from "react";
import * as S from "./style";

interface SelectInputProps {
  changeCellValue: (
    id: string | number,
    title: string | null,
    content: string | number | null,
    isOpen: boolean
  ) => void;
  handleCellClick: (id: number | string) => void;
  item: {
    title: string | number;
    id: string | number;
    isOpen: boolean;
    content: string;
    newStroke?: string | number;
  };
  deleteCell: (id: string | number) => void;
}

const SelectInputMemo: React.FC<SelectInputProps> = ({
  changeCellValue,
  handleCellClick,
  item,
  deleteCell,
}) => {
  const isOpen = item.isOpen ? item.isOpen : false;

  return (
    <S.StyledTableCellOptions key={item.id} $isOpen={isOpen}>
      <div style={{ display: "flex" }}>
        <S.StyledInputName
          $isOpen={isOpen}
          onChange={(e) =>
            changeCellValue(item.id, null, e.target.value, false)
          }
          value={item.content}
          onFocus={() => handleCellClick(item.id)}
        />
        <S.StyledButtonOpenTools
          onClick={() => changeCellValue(item.id, null, null, true)}
        >
          +
        </S.StyledButtonOpenTools>
        <S.StyledButtonOpenTools onClick={() => deleteCell(item.id)}>
          x
        </S.StyledButtonOpenTools>
      </div>
      <S.StyledFormulaTool $isOpen={isOpen}>
        <p>добавить 2ю строку</p>
        <S.StyledInput
          placeholder="значение"
          onChange={(e) =>
            changeCellValue(item.id, e.target.value, null, false)
          }
          value={item.newStroke}
          onFocus={() => handleCellClick(item.id)}
        />
        <p>Значение ячейки в столбце ,можно указать формулу</p>
      </S.StyledFormulaTool>
    </S.StyledTableCellOptions>
  );
};

export const SelectInput = memo(SelectInputMemo);
