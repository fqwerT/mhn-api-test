import React, {
  useRef,
  useCallback,
  useState,
} from "react";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";
import { StyledDashboardWrap } from "../dashboard/style";
import { HyperFormula } from "hyperformula";
import { ExportBtn } from "../export/export";
import * as S from "./style";
import "./style.css";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useContext } from "react";
import { MyContext } from "../DataProvider/DataProvider";
import { handleDownloadFile } from "./utils";
import { TableTabs } from "../TableTabs/TableTabs";

registerAllModules();

export const Table: React.FC = (): React.JSX.Element => {
  const hotRef = useRef(null);
  const [rowAlert, setRowAlert] = useState<boolean>(true);
  const [tab, setTab] = useState<string | null>(null);
  const { data, updateData } = useContext(MyContext);

  const handleCellClick = (e, cellId) => {
    console.log("Clicked cell ID:", cellId);
  };

  const checkCells = () => {
    setRowAlert(false);
  };

  const exportFile = useCallback(() => {
    handleDownloadFile(data.data,data.tabs);
  }, [data]);

  const handleSetTab = (item: string) => {
    setTab(item);
  };
  console.log(data)
  return (
    <StyledDashboardWrap>
      <TableTabs data={data?.tabs} handleSetTab={handleSetTab} />
      {tab && (
        <>
          <HotTable
            afterOnCellMouseDown={(e) => console.log(e)}
            ref={hotRef}
            data={data?.tabs && data?.data[tab]}
            colHeaders={true}
            formulas={{
              engine: HyperFormula.buildEmpty({
                licenseKey: "internal-use-in-handsontable",
              }),
            }}
            rowHeaders={true}
            manualColumnMove={true}
            
            copyPaste={true}
            height="auto"
            width="100%"
            licenseKey="non-commercial-and-evaluation"
            filters={true}
            dropdownMenu={true}
            manualColumnResize={true}
            manualRowResize={true}
            autoWrapRow={true}
            autoWrapCol={true}
            afterRenderer={(TD, row, col, prop, value, cellProperties) => {
              TD.setAttribute("data-cellId", `${row}`);
              TD.addEventListener("click", (e) =>
                handleCellClick(e, `${row}-${col}`)
              );
            }}
          />
          <S.StyledExportWrap>
            <S.StyledButtonsContainer>
              <ExportBtn
                reftable={hotRef}
                alertFunc={checkCells}
                value={"Скачать"}
                onClick={() => exportFile()}
                type="download"
              />
              <ExportBtn
                reftable={hotRef}
                alertFunc={checkCells}
                value={"Сохранить"}
                type="save"
                onClick={() => {}}
              />
            </S.StyledButtonsContainer>
            {rowAlert && (
              <Alert severity="info">
                В файле {data.cellvaluezero} ячеек со значением - '0', данных со
                значением '#ERROR!' - {data.errorCells}
                <Button size="small" onClick={() => checkCells()}>
                  Ок
                </Button>
              </Alert>
            )}
          </S.StyledExportWrap>
        </>
      )}
    </StyledDashboardWrap>
  );
};

{
  /* В файле  пустых строк, данных со значением 0 - 17, 5 ячеек с
          пустыми значениями */
}
      {/* <S.StyledInfoHeader>
        {show && (
          <Alert severity="error">
            Текущую ячейку - {id} редактирует другой пользователь
          </Alert>
        )}
      </S.StyledInfoHeader> */}