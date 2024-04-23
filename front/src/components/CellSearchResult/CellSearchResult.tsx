import { memo } from "react";
import * as S from "./style";

interface CellSearchResultProps {
  data: string | number;
  func: (arg: string | number) => void;
}

export const CellSearchResult: React.FC<CellSearchResultProps> = memo(
  ({ data, func }) => {
    return (
      <S.StyledSearchResult onClick={() => func(data)}>
        <S.StyledResultTitle>{data}</S.StyledResultTitle>
      </S.StyledSearchResult>
    );
  }
);
