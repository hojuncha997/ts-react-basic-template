import { useRoutes, Navigate } from "react-router-dom";
import MainLayout from "../layouts/main/MainLayout";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";

import GuestGuard from "../auth/GuestGuard";
import AuthGuard from "../auth/AuthGuard";

import { LoginPage, ProductListPage, Belt } from "./elements";

export default function RoutesConfig() {
  return useRoutes([
    // Auth
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: (
            // GuestGuard는 인증되지 않은 사용자만 접근할 수 있다
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
      ],
    },

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
      path: "dashboard",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
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
