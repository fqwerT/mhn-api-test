import React from "react";
import { FileProps } from "../../interface/interface";
import * as S from "./style";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector } from "../../store/hooks";
import { StatusIcon } from "../StatusIcon/StatusIcon";
interface ListProps {
  data: FileProps[];
  prev: any;
  status: any;
}

export const FileList: React.FC<ListProps> = ({ data, prev, status }) => {
  const uploadStatus = useAppSelector((state) => state.table.uploadStatus)

  return (
    <S.StyledListContainer>
      {data.map((item, index) => (
        <S.StyledListRow key={String(index)}>
          <S.StyledInfoColumn>
            <p>Имя: </p>
            <S.StyledText onClick={() => prev(item)}>{item?.name}</S.StyledText>
          </S.StyledInfoColumn>
          <S.StyledInfoColumn>
            <p>Размер: </p> <S.StyledText>{item?.size} байт</S.StyledText>
          </S.StyledInfoColumn>
          <S.StyledInfoColumn>
            <p>Тип: </p>
            <S.StyledText>{item?.type}</S.StyledText>
          </S.StyledInfoColumn>
          {/* <S.StyledInfoColumn>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </S.StyledInfoColumn> */}

          <S.StyledInfoColumn>
            {/* <CircularProgress size={'25px'}/> */}
            <StatusIcon status={uploadStatus}/>
          </S.StyledInfoColumn>

        </S.StyledListRow>
      ))}
    </S.StyledListContainer>
  );
};
