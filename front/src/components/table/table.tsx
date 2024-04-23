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

import { StyleProps } from "../../interface/interface";
import { CellStyle } from "../CellStyle/CellStyle";
import { uid } from "uid";
registerAllModules();

export const Table: React.FC = (): React.JSX.Element => {
  const hotRef = useRef(null);
  const [rowAlert, setRowAlert] = useState<boolean>(true);
  // const [tab, setTab] = useState<string | null>(null);
  const { data, updateData } = useContext(MyContext);
  //@ts-ignore
  const stylesPayload = useAppSelector((state) => state.table.cellStyle);
  const [selectedNodes, setSelectedNodes] = useState<any>([]);
  const [styles, setStyles] = useState<any>(null);
  const [rangeStyles, setRangeStyles] = useState<any>();
  const checkCells = () => {
    setRowAlert(false);
  };

  const exportFile = useCallback(() => {
    handleDownloadFile(data.data, data.tabs);
  }, [data]);

  const afterSelection = (e: any, coords) => {
    
    setStyles({
      ...styles,
      //@ts-ignore
      col: coords.col,
      row: coords.row,
      range: null,
      id: uid(e.target.textContent),
    });
  };


  // {
  //   row: i.row,
  //   col: i.col,
  //   className: `custom-cell${i.id}`,
  // };

  const cellRender = useMemo(() => {
    return stylesPayload.flatMap((i: any) =>
      i.range.map((item: any) => ({
        row: item.row,
        col: item.col,
        className: `custom-cell${i.id}`,
      }))
    )
  },[stylesPayload]


  );

  console.log(cellRender)

  const selectCells = () => {
   // setStyles(null)
    const nodes = Array.from(document.querySelectorAll('.highlight')) 
  
    const hot = hotRef.current.hotInstance;
    const sortedCoordinates = nodes.map(node => {
      if (node) {
        return hot.getCoords(node)
      }

    })
   setSelectedNodes(sortedCoordinates)
   }

   useEffect(() => {
    setStyles({ ...styles, range: selectedNodes, col: null, row: null });
   },[selectedNodes])

   console.log(stylesPayload)

  return (
    <StyledDashboardWrap>
      <CellStyle style={stylesPayload} />
      <S.StyledFilters>
        <CellSearch />
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
        afterOnCellMouseDown={(e, coords) => afterSelection(e, coords)}
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
        {/* {rowAlert && (
              <Alert severity="info">
                В файле {data.cellvaluezero} ячеек со значением - '0', данных со
                значением '#ERROR!' - {data.errorCells}
                <Button size="small" onClick={() => checkCells()}>
                  Ок
                </Button>
              </Alert>
            )} */}
        {/* //@ts-ignore */}
        {/* <button onClick={(e) => handleSelectButtons()}>ads</button> */}
      </S.StyledExportWrap>
    </StyledDashboardWrap>
  );
};

// const handleSetTab = (item: string) => {
//   setTab(item);
// };


  // const handleSelectButtons = () => {
  //   const hot = hotRef.current.hotInstance;
  //   const selected = hot.getSelected() || [];
  //   for (let index = 0; index < selected.length; index += 1) {
  //     const [row1, column1, row2, column2] = selected[index];
  //     const startRow = Math.max(Math.min(row1, row2), 0);
  //     const endRow = Math.max(row1, row2);
  //     const startCol = Math.max(Math.min(column1, column2), 0);
  //     const endCol = Math.max(column1, column2);

  //     for (let rowIndex = startRow; rowIndex <= endRow; rowIndex += 1) {
  //       for (
  //         let columnIndex = startCol;
  //         columnIndex <= endCol;
  //         columnIndex += 1
  //       ) {
  //         setSelectedNodes((prev) => [
  //           ...prev,
  //           hot.getCell(rowIndex, columnIndex),
  //         ]);
  //       }
  //     }
  //   }
  // };

    //@ts-ignore
  // const convertedRange = useMemo(() => {
  //   if (hotRef.current) {
  //     const hot = hotRef.current.hotInstance;
  //     return selectedNodes.map((item) => {
  //       const nodePayload = {
  //         col: hot.getCoords(item).col,
  //         row: hot.getCoords(item).row,
  //         id: uid(),
  //       };
  //       return nodePayload;
  //     });
  //   }
  // }, [selectedNodes]);

  // useEffect(() => {
  //   setStyles({ ...rangeStyles, range: convertedRange, col: null, row: null });
  // }, [convertedRange]);