import styled from "styled-components";

export const StyledExportWrap = styled.section`
  max-width: 500px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;

export const StyledButtonsContainer = styled(StyledExportWrap)`
  flex-direction: row;
  padding-top: 15px;
`;

export const StyledInfoHeader = styled.section`
  width: 100%;
  height: 100%;
  max-height: 50px;
  min-height: 50px;
  max-width: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const StyledFilters = styled.section`
display:flex;
flex-direction:row;

`