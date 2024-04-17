import styled from "styled-components";

export const StyledSideBar = styled.aside`
  max-width: 5%;
  min-width: 50px;
  width: 100%;
  border-right: 1px solid #2e669d;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLinksWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  height: 20%;
  justify-content: space-between;
`;
export const StyledSideIcons = styled.img<{ $isColor: boolean }>`
  max-width: 30px;
  max-height: 30px;
  background-color: ${({ $isColor }) => ($isColor ? "#2e669d25" : "white")};
  padding: 5px;
  border-radius: 50px;
`;
