import styled from "styled-components";

export const StyledWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 7px;
`;
export const StyledBlock = styled.section`
  max-width: 300px;
  width: max-content;
  height: 60px;
  background-color: white;
  padding: 10px;
  border-radius: 7px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledColorsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const StyledCustomizeRow = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const StyledColorsWrap = styled.article`
  position: absolute;
  background-color: white;
  bottom: -170px;
  //  border: 1px solid #00000027;
  box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.33);
  -webkit-box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.33);
  justify-content: center;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: row;
  padding: 5px;
  border-radius: 7px;
`;

export const StyledButtonsControlls = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
