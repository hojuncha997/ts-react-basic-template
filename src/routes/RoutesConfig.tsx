import { useRoutes, Navigate } from "react-router-dom";
import MainLayout from "../layouts/main/MainLayout";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";

import { LoginPage, ProductListPage, Belt } from "./elements";

export default function RoutesConfig() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      // element: <Navigate to="/auth/login" replace />,
      children: [
        { path: "product", element: <ProductListPage /> },
        // { path: "products", element: <ProductListPage children={null} /> },
      ],
    },
    {
      path: "auth",
      children: [{ path: "login", element: <LoginPage /> }],
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "product",
          children: [
            { path: "", element: <Navigate to="list" replace /> },
            { path: "list", element: <ProductListPage /> },
          ],
        },
        {
          path: "belt",
          element: <Belt />,
        },
      ],
    },
    {
      path: "*",
      // element: <Navigate to="/auth/login" replace />,
      element: (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "min(10vw, 5rem)",
            }}
          >
            404
            <div>
              <button>
                <a href="http://localhost:3000/auth/login">To Login Page</a>
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ]);
}
