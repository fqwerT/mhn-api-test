import React from "react";
import { StyledHeader } from "./style";
//@ts-ignore
import img from "../../../assets/img/logo.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";
export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img src={img} />
      <Tooltip title="Профиль">
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      </Tooltip>
    </StyledHeader>
  );
};
