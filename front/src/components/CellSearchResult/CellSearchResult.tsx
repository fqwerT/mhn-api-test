import { memo } from "react";
import * as S from "./style";

interface CellSearchResultProps {
  data: string | number;
}

export const CellSearchResult: React.FC<CellSearchResultProps> = memo(
  ({ data }) => {
    return (
      <S.StyledSearchResult>
        <S.StyledResultTitle>{data}</S.StyledResultTitle>
      </S.StyledSearchResult>
    );
  }
);
