import styled from "styled-components";

export const StyledUploader = styled.div`

  /* height: 500px; */
  /* overflow: auto; */
  background-color: white;
  width: 400px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  /* border: 1px solid #1976d2; */

  border-radius: 7px;
`;
export const StyledControllsButton = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
