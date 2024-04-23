import styled from "styled-components";

export const StyledSearchCell = styled.section`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-height: 100px;
  height: 100%;
  gap: 10px;
  position: relative;
  padding-bottom: 15px;
  background-color: white;
  padding: 10px;
`;

export const StyledCellSearchList = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  gap: 10px;
  align-items: center;
  z-index: 1000;
  max-height: 300px;
  overflow: auto;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: -1px 3px 11px 7px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: -1px 3px 11px 7px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: -1px 3px 11px 7px rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding: 10px;
`;

export const StyledSearchWrap = styled.section`
  width: 350px;
  position: relative;
`;
