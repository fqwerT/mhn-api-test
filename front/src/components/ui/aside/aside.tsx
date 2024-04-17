import React, { useEffect, useMemo, useState } from "react";
import { StyledSideBar, StyledLinksWrapper } from "./style";
import { Link } from "react-router-dom";
import { StyledSideIcons } from "./style";
//@ts-ignore
import tableicon from "../../../assets/img/table.svg";
//@ts-ignore
import archiveicon from "../../../assets/img/archive.svg";
//@ts-ignore
import homeicon from "../../../assets/img/home.svg";
import Tooltip from "@mui/material/Tooltip";
import { useLocation } from 'react-router-dom'
const initialRoutes = [
  {
    title: "Главная",
    iconSrc: homeicon,
    route: "/",
    id: 1,
    isColored: false,
  },
  {
    title: "Архив",
    iconSrc: archiveicon,
    route: "/archive",
    id: 2,
    isColored: false,
  },

  {
    title: "Таблицы",
    iconSrc: tableicon,
    route: "/tables",
    id: 3,
    isColored: false,
  },
];
export const Aside: React.FC = () => {
  const location = useLocation()
  const links = useMemo(() => {
    return initialRoutes.map((i) => {
      if (i.route === location.pathname) {
        return { ...i, isColored: true };
      } else {
        return { ...i, isColored: false };
      }
    });
  }, [location.pathname]);

  return (
    <StyledSideBar>
      <StyledLinksWrapper>
        {links.map((i) => (
          <Link to={i.route} key={i.id}>
            <Tooltip title={i.title}>
              <StyledSideIcons
                src={i.iconSrc}
                id={String(i.id)}
                $isColor={i.isColored}
              />
            </Tooltip>
          </Link>
        ))}
      </StyledLinksWrapper>
    </StyledSideBar>
  );
};
