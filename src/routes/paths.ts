function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  loginUnprotected: path(ROOTS_AUTH, "/login-unprotected"),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  APP: path(ROOTS_DASHBOARD, "/login"),

  general: {
    app: path(ROOTS_DASHBOARD, "/app"),
  },

  product: {
    root: path(ROOTS_DASHBOARD, "/product"),
    add: path(ROOTS_DASHBOARD, "/product/add"),
    list: path(ROOTS_DASHBOARD, "/product/list"),
  },

  belt: {
    root: path(ROOTS_DASHBOARD, "/belt"),
  },
};
