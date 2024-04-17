import styled from "styled-components";

export const StyledListContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  height:70px;
  padding: 10px;
`;

export const StyledListRow = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledText = styled.p`
  font-size: 15px;
  font-weight: 600;
  width: 120px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 20px;
`;

export const StyledStatus = styled.p<{ $success: boolean }>`
  font-weight: 800;
  text-transform: uppercase;
  font-size: 11px;
  color: ${(props) => (props.$success ? "green" : "red")};
`;


export const StyledInfoColumn = styled.section`
display: flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
`


