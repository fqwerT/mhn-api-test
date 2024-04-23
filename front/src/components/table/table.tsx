import React, {
  useRef,
  useCallback,
  useState,
  useMemo,
  useEffect,
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
import { handleDownloadFile, submiteFormula } from "./utils";
import { TableTabs } from "../TableTabs/TableTabs";
import { CellSearch } from "../CellSearch/CellSearch";
import { CellCustomize } from "../CellCustomize/CellCustomize";
import { useAppSelector } from "../../store/hooks";
import * as lodash from "lodash";
import { StyleProps } from "../../interface/interface";
import { CellStyle } from "../CellStyle/CellStyle";
import { uid } from "uid";
import { useDispatch } from "react-redux";
import { setStyledCell } from "../../store/table/table";

registerAllModules();

export const Table: React.FC = (): React.JSX.Element => {
  const hotRef = useRef(null);
  const [rowAlert, setRowAlert] = useState<boolean>(true);
  // const [tab, setTab] = useState<string | null>(null);
  const { data, updateData } = useContext(MyContext);
  const dispatch = useDispatch();
  const stylesPayload = useAppSelector((state) => state.table.cellStyle);
  const [selectedNodes, setSelectedNodes] = useState<any>([]);
  const [styles, setStyles] = useState<any>(null);
  const checkCells = () => {
    setRowAlert(false);
  };

  const exportFile = useCallback(() => {
    handleDownloadFile(data.data, data.tabs);
  }, [data]);

  const cellRender = useMemo(() => {
    return lodash.uniq(
      stylesPayload.flatMap((i: any) =>
        i.range.map((item: any) => ({
          row: item.row,
          col: item.col,
          className: `custom-cell${i.id}`,
        }))
      )
    );
  }, [stylesPayload]);

  const selectCells = () => {
    // setStyles(null)
    const nodes = Array.from(document.querySelectorAll(".highlight"));
    const hot = hotRef.current.hotInstance;
    const sortedCoordinates = nodes.map((node) => {
      if (node) {
        return { ...hot.getCoords(node) };
      }
    });
    setSelectedNodes(sortedCoordinates);
  };

  useEffect(() => {
    setStyles({
      ...styles,
      range: lodash.uniq(selectedNodes),
      id: uid(),
    });
  }, [selectedNodes]);

  const findCellsByValue = useCallback((searchValue: string | number) => {
    const tableInstance = hotRef.current;
    if (tableInstance) {
      const cells = [];
      const data = tableInstance.hotInstance.getData();
      const rowCount = tableInstance.hotInstance.countRows();
      const colCount = tableInstance.hotInstance.countCols();

      for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
          const cellData = data[row][col];
          if (
            typeof cellData === "string" &&
            cellData.includes(String(searchValue))
          ) {
            const cell = tableInstance.hotInstance.getCell(row, col);
            cells.push(cell);
          }
        }
      }
    }
  }, []);

  return (
    <StyledDashboardWrap>
      <CellStyle style={stylesPayload} />
      <S.StyledFilters>
        <CellSearch func={findCellsByValue} />
        <CellCustomize setState={setStyles} state={styles} />
      </S.StyledFilters>
      {/* <TableTabs data={data?.tabs} handleSetTab={handleSetTab} /> */}
      <HotTable
        ref={hotRef}
        data={data?.data}
        filters={true}
        dropdownMenu={true}
        width="100%"
        height="100%"
        rowHeaders={true}
        // afterOnCellMouseDown={(e, coords) => afterSelection(e, coords)}
        afterSelectionEnd={() => selectCells()}
        cell={cellRender}
        colHeaders={true}
        outsideClickDeselects={false}
        selectionMode="multiple"
        autoWrapRow={true}
        autoWrapCol={true}
        manualRowResize={true}
        licenseKey="non-commercial-and-evaluation"
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
            В файле {data?.cellvaluezero} ячеек со значением - '0', данных со
            значением '#ERROR!' - {data?.errorCells}
            <Button size="small" onClick={() => checkCells()}>
              Ок
            </Button>
          </Alert>
        )}
      </S.StyledExportWrap>
    </StyledDashboardWrap>
  );
};

// const afterSelection = (e: any, coords) => {
//   setStyles({
//     ...styles,
//     //@ts-ignore
//     col: coords.col,
//     row: coords.row,
//     range: null,
//     id: uid(e.target.textContent),
//   });
// };
