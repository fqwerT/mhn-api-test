import React from "react";
import { Header } from "../components/ui/header/header";
import { Outlet } from "react-router-dom";
import { Aside } from "../components/ui/aside/aside";
import { StyledWrap } from "./style";
import { MyProvider } from "../components/DataProvider/DataProvider";
export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <MyProvider>
        <StyledWrap>
          <Aside />
          <Outlet />
        </StyledWrap>
      </MyProvider>
    </>
  );
};
