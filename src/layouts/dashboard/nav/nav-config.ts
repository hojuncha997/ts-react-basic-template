import { PATH_DASHBOARD } from "../../../routes/paths";

const navConfig = [
  {
    subheader: "로그인",
    items: [
      {
        title: "로그인",
        path: PATH_DASHBOARD.APP,
        // icon: ICONS.dashboard,
      },
    ],
  },
  {
    subheader: "PRODUCT",
    items: [
      {
        title: "상품목록",
        path: PATH_DASHBOARD.product.root,
        // icon: ICONS.product,
      },
    ],
  },
];

export default navConfig;
