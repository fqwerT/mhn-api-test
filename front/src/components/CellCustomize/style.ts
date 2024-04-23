import styled from "styled-components";

export const StyledWrap = styled.section`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const StyledBlock = styled.section`
  max-width: 300px;
  width: max-content;
  height: 50px;
`;

export const StyledColorsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const StyledColorButton = styled.button<{ $color: string }>`
  width: 25px;
  height: 25px;
  border: 0;
  border-radius: 50px;
  background-color: ${({ $color }) => `${$color}`};
  border: 1px solid black;
  &:hover {
         transform:scale(1.1);
  }
`;
