import React, { useMemo, useState, memo } from "react";
import { Button } from "@mui/material";
import * as S from "./style";
interface TableTabsProps {
  data: any;
  handleSetTab: (item: string) => void;
}

export const TableTabs: React.FC<TableTabsProps> = memo(
  ({ data, handleSetTab }) => {
    if (data) {
      return (
        <S.StyledTabs>
          {data &&
            data.map((item: string,index:number) => (
              <Button onClick={() => handleSetTab(item)} variant="outlined" key={index}>
                {item}
              </Button>
            ))}
        </S.StyledTabs>
      );
    }

    if (!data) {
      return <div></div>;
    }
  }
);


    // return (
    //   <S.StyledTabs>
    //     {/* {data ? (
    //       data.map((item: string) => (
    //         <Button onClick={() => handleSetTab(item)} variant="outlined">
    //           {item}
    //         </Button>
    //       ))
    //     ) : (
    //       <></>
    //     )} */}
    //   </S.StyledTabs>
    // );