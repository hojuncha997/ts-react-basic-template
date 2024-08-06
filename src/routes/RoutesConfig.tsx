import { useRoutes, Navigate } from "react-router-dom";
import MainLayout from "../layouts/main/MainLayout";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";

import GuestGuard from "../auth/GuestGuard";
import AuthGuard from "../auth/AuthGuard";

import { LoginPage, ProductListPage, AddProduct, Belt } from "./elements";

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
            // {
            //   element: <Navigate to="/dashboard/product/list" replace />,
            //   index: true,
            // },
            {
              path: "", // 빈 문자열로 설정
              element: <ProductListPage />, // 상품목록의 기본 페이지로 설정
            },
            { path: "list", element: <ProductListPage /> },
            { path: "add", element: <AddProduct /> },
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

/*
 user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    new: path(ROOTS_DASHBOARD, '/user/new'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    account: path(ROOTS_DASHBOARD, '/user/account'),
    edit: (name: string) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
  },


  .....


{
  path: 'user',
  children: [
    { element: <Navigate to="/dashboard/user/profile" replace />, index: true },
    { path: 'profile', element: <UserProfilePage /> },
    { path: 'cards', element: <UserCardsPage /> },
    { path: 'list', element: <UserListPage /> },
    { path: 'new', element: <UserCreatePage /> },
    { path: ':name/edit', element: <UserEditPage /> },
    { path: 'account', element: <UserAccountPage /> },
  ],
},

*/
