import React, { useCallback, useState, useMemo, useRef } from "react";
import { AsyncUploadFiles, removeDuplicates } from "./utils";
import { FileList } from "../filesList/fileList";
import { FileProps } from "../../interface/interface";
import { useAppDispatch } from "../../store/hooks";
import * as S from "./style";
import { setTable, setuploadStatus } from "../../store/table/table";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Tooltip from "@mui/material/Tooltip";
import { ModalFilesUploader } from "../ModalfilesUpload/ModalFilesUpload";
import { useContext } from "react";
import { MyContext } from "../DataProvider/DataProvider";
import { useNavigate } from "react-router";

export const FileUploader: React.FC = (): React.JSX.Element => {
  const [files, setFiles] = useState<FileProps[]>([]);
  const [status, setStatus] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const filepicker = useRef(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, updateData } = useContext(MyContext);

  const uploadFile = (e) => {
    if (e.target.files[0]) {
      setFiles((prev) => [...prev, e.target.files[0]]);
      setOpen(!open);
      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryString = new Uint8Array(event.target.result as any);
        dispatch(setuploadStatus("pending"));
        fetch("http://localhost:8000/parse", {
          method: "POST",
          body: JSON.stringify({ data: binaryString }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res: any) => {
            if (!res.ok) {
              dispatch(setuploadStatus("reject"));
            }
            return res.json();
          })
          .then((res: any) => {
            //@ts-ignore
            updateData(res);
            dispatch(setuploadStatus("success"));
          })
          .catch((err) => {
            dispatch(setuploadStatus("reject"));
          });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  const sendFile = useCallback(() => {
    AsyncUploadFiles(files, setStatus, status);
  }, [files, status]);

  const handlePreview = (item) => {
    dispatch(setTable(item));
  };

  const filteredFiles = useMemo(() => {
    return removeDuplicates(files);
  }, [files]);

  const handleClose = () => {
    setOpen(false);
    setFiles([]);
    setStatus([]);
    filepicker.current.value = null;
  };

  return (
    <S.StyledUploader>
      <Tooltip title="Загрузить таблицы">
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Загрузить таблицу
          <S.VisuallyHiddenInput
            type="file"
            onChange={uploadFile}
            ref={filepicker}
            placeholder=""
          />
        </Button>
      </Tooltip>
      {open && (
        <ModalFilesUploader
          filteredFiles={filteredFiles}
          sendFile={sendFile}
          handleClose={handleClose}
          handlePreview={handlePreview}
          status={status}
        />
      )}
    </S.StyledUploader>
  );
};


        // const request = await fetch("http://localhost:8000/parse", {
        //   method: "POST",
        //   body: JSON.stringify({ data: binaryString }),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });

        // const response = await request.json();
        // console.log(response.status)
        // if (response.status === 200) {
        //   dispatch(setuploadStatus("success"));
        //   updateData(response);
        // }