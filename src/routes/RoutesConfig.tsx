import { useRoutes, Navigate } from "react-router-dom";
import MainLayout from "../layouts/main/MainLayout";
import { LoginPage, ProductListPage } from "./elements";

export default function RoutesConfig() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "product", element: <ProductListPage /> },
        // { path: "products", element: <ProductListPage children={null} /> },
      ],
    },
  ]);
}
