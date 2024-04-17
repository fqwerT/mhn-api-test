import styled from "styled-components";

export const StyledUploaderHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  position: sticky;
  top: 0;
  background-color: white;
  padding-left: 10px;
  padding-top: 10px;
  box-sizing: border-box;
`;

export const StyledUploaderControlls = styled(StyledUploaderHeader)`
  bottom: 0;
  padding-bottom: 10px;
  width: 100%;
  justify-content: space-between;
  padding-right: 10px;
`;

export const StyledModalWrap = styled.div`
  width: 100%;
  max-width: 600px;
  max-height: 400px;
  border-radius: 7px;
  background-color: white;
  padding: 7px;
`;
export const StyledModalContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.329);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
