import React, { useCallback } from "react";
import * as S from "./style";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Tooltip from "@mui/material/Tooltip";
import { FileList } from "../filesList/fileList";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../store/hooks";

export const ModalFilesUploader = ({
  filteredFiles,
  handleClose,
  handlePreview,
  status,
}: any) => {
  const navigate = useNavigate();
  const uploadStatus = useAppSelector((state) => state.table.uploadStatus)
  return (
    <S.StyledModalContainer>
      {filteredFiles.length > 0 && (
        <S.StyledModalWrap>
          <FileList data={filteredFiles} prev={handlePreview} status={status} />
          <S.StyledUploaderControlls>
            <Button variant="outlined" disabled={uploadStatus === 'reject'} onClick={() => navigate("/table")}>
              сохранить
            </Button>
            <Button variant="outlined"  onClick={() => handleClose()}>
              закрыть
            </Button>
          </S.StyledUploaderControlls>
        </S.StyledModalWrap>
      )}
    </S.StyledModalContainer>
  );
};
