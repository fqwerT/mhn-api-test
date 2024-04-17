import React from "react";
import { useAppSelector } from "../../store/hooks";
import { utils, writeFile } from "xlsx";
import { buttonClickCallback } from "./utills";
import { Button } from "@mui/material";
import * as S from "./style";
import CloudUpload from "@mui/icons-material/CloudUpload";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
interface IExport {
  reftable: React.MutableRefObject<any>;
  alertFunc: () => void;
  value: string;
  type: string;
  onClick: any;
}

export const ExportBtn: React.FC<IExport> = ({
  reftable,
  alertFunc,
  value,
  type,
  onClick,
}) => {
  const name = useAppSelector((state) => state.table.name);
  return (
    <Button
      id="export-file"
      //  onClick={() => alertFunc()}
      onClick={onClick}
      variant="outlined"
      startIcon={type === "save" ? <CloudUpload /> : <SaveAltIcon />}
      // onClick={() => buttonClickCallback(reftable, utils, writeFile, 'тестовая таблица')}
    >
      {value}
    </Button>
  );
};
