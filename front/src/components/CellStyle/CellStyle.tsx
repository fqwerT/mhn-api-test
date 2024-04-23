import React, { memo, useMemo } from "react";
import { useAppSelector } from "../../store/hooks";
import { shallowEqual } from "react-redux";
interface CellStyleProps {
  style: any;
}

export const CellStyle: React.FC<CellStyleProps> = memo(({ style }) => {
  return (
    <style>
      {style.map(
        (i) =>
          `.custom-cell${i.id} {
                     font-weight:${i.fontWeight}!important;
                     font-size:${i.fontSize}!important;
                     background-color:${i.color}!important;
                  }
                `
      )}
    </style>
  );
});
