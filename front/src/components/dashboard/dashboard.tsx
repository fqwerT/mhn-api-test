import React from "react";
import { StyledDashboardWrap, StyledLatestChanges } from "./style";

export const Dashboard: React.FC = () => {
  return (
    <StyledDashboardWrap>
      <StyledLatestChanges>
        <h1>Последние изменения</h1>
        <p>тестовая таблица 11.11.23</p>
      </StyledLatestChanges>
    </StyledDashboardWrap>
  );
};
