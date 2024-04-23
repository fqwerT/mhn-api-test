import { Tooltip } from "@mui/material";
import * as S from "./style";
import { ColorsProps } from "../../interface/interface";

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

interface ColorPaletProps {
  state: boolean;
  setState: (arg: string, arg2: string) => void;
  type: string;
}

export const CollorPallet: React.FC<ColorPaletProps> = ({
  state,
  setState,
  type,
}) => {
  console.log(type);
  return (
    <>
      {state &&
        colors.map((item: ColorsProps) => (
          <S.StyledColorButton
            $color={item.color}
            onClick={(e) => setState(type, item.color)}
            id={String(item.id)}
            key={item.id}
          ></S.StyledColorButton>
        ))}
    </>
  );
};
