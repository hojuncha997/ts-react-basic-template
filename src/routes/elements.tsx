import { Suspense, lazy, ComponentType } from "react";

const Loadable =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) =>
    (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );

// export const LoginPage = lazy(() => import("../pages/loginPage"));
export const LoginPage = Loadable(lazy(() => import("../pages/LoginPage")));

export const ProductListPage = Loadable(
  lazy(() => import("../pages/product/ProductListPage"))
);

export const Belt = Loadable(lazy(() => import("../pages/Belt")));
