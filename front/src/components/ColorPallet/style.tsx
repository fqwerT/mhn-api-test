import styled from "styled-components";

export const StyledColorButton = styled.button<{ $color: string }>`
  width: 25px;
  height: 25px;
  border: 0;
  border-radius: 50px;
  background-color: ${({ $color }) => `${$color}`};
  border: 1px solid black;
  &:hover {
    transform: scale(1.1);
  }
`;
