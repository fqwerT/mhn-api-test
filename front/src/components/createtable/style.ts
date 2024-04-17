import styled from "styled-components";

export const Text = styled.input`
    border-radius: 8px;
    padding: 5px;
    font-family: "Montserrat", sans-serif;
    font-family: 600;
    margin: 3px;
    color: black;
    border: 0;
    outline: 0;
    border-bottom: 1px solid green;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`

export const StyledInput = styled(Text)`
&::placeholder {
  font-weight: 600;
}
`
export const StyledCreateTableHeader = styled.div`
display:flex;
justify-content: space-between;
width:100%;
align-items:center;
`

export const StyledButton = styled.button`
max-width:160px;
text-align:center;
border:1px solid #2e669d;
padding: 5px;
border-radius:7px;
font-family: "Montserrat", sans-serif;
font-weight:600;
`

export const StyledCellsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  height: 600px;
  border: 1px solid gray;
`;

export const StyledCellsList = styled.article<{$open:boolean}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  overflow-x: auto;
  height:100%;
`;

export const StyledButtonOpenTools = styled.button`
  border: 0;
  background-color: white;
  border-radius: 8px;
  outline: 0;
  user-select: none;
`;

export const StyledTableCellOptions = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #2e669d;
  height: ${({$isOpen}) => ($isOpen === false ? "33px" : "300px")};
  transition: 0.3s linear;
  border-radius: 8px;
  margin: 5px;
  max-width: 190px;
`;


export const StyledInputName = styled(Text)<{ $isOpen: boolean }>`
  border-bottom: ${({$isOpen}) =>
    $isOpen === false ? "0px" : "1px solid green"};
`;

export const StyledFormulaTool = styled.div<{ $isOpen: boolean }>`
  display: ${({$isOpen }) => ($isOpen === false ? "none" : "block")};
  padding-top: 10px;

  p {
    padding: 5px;
    font-weight: 700;
    font-size: 13px;
  }
`;

export const StyledTableDemo = styled.div<{$open:boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

 // transition:0.3s linear;
  height:100%;
  max-height:  ${({$open}) => ($open === false ? '50%' : '90%' )};
`;

export const StyledEditHeader = styled.div<{$open:boolean}>`
width:100%;
height:100%;
max-height: ${({$open}) => ($open === false ? "40%" : "0%")};
visibility: ${({$open}) => ($open === false ? "visible" : "hidden")};

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`