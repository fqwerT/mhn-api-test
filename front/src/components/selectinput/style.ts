import styled from "styled-components";
import { Text } from "../createtable/style";

export const StyledTableCellOptions = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #2e669d;
  height: ${({ $isOpen }) => ($isOpen === false ? "33px" : "200px")};
  border-radius: 8px;
  margin: 5px;
  max-width: 210px;
  transition: 0.3s ease-in-out;
`;

export const StyledInputName = styled(Text)<{ $isOpen: boolean }>`
  border-bottom: ${({ $isOpen }) =>
    $isOpen === false ? "0px" : "1px solid green"};
`;

export const StyledFormulaTool = styled.div<{ $isOpen: boolean }>`
  opacity: ${({ $isOpen }) => ($isOpen === false ? "0" : "1")};
  transition: ${({ $isOpen }) => ($isOpen === false ? "0s" : "0.6s ease-in")};

  p {
    padding: 5px;
    font-weight: 700;
    font-size: 13px;
  }
`;

export const StyledButtonOpenTools = styled.button`
  border: 0;
  background-color: white;
  border-radius: 8px;
  outline: 0;
  user-select: none;
`;

export const StyledInput = styled(Text)``;
