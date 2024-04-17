import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layouts/layout";
import { Dashboard } from "./components/dashboard/dashboard";
import { TablesList } from "./components/tables/tables";
import { Table } from "./components/table/table";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Archive } from "./components/Archive/Archive";
import KeyCloakService from "./components/Kc/Keycloack";
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("No element with id 'root' found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/archive",
        element: <Archive />,
      },
      {
        path: "/tables",
        element: <TablesList />,
      },
      {
        path: "/table",
        element: <Table />,
      },
      // {
      //   path: "/create",
      //   element: <CreateTable />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(rootElement);

//KeyCloakService.initKeycloak(() => console.log(""));

root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
