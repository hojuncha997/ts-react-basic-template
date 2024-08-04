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
        // path: PATH_DASHBOARD.product.root,
        path: "",
        children: [
          { title: "서브메뉴1", path: PATH_DASHBOARD.product.root },
          { title: "서브메뉴2", path: "/sub2" },
        ],
        // icon: ICONS.product,
      },
      {
        title: "상품목록2",
        // path: PATH_DASHBOARD.product.root,
        path: "",
        children: [
          { title: "서브메뉴1", path: PATH_DASHBOARD.product.root, children: [
            { title: "서브메뉴1", path: PATH_DASHBOARD.product.root },
            { title: "서브메뉴2", path: "/sub2" },
          ], },
          { title: "서브메뉴2", path: "/sub2" },
        ],
        // icon: ICONS.product,
      },
    ],
  },
  {
    subheader: "BELT",
    items: [
      {
        title: "단증",
        path: PATH_DASHBOARD.belt.root,
        // children: [{ title: "sdfsd" }],
        // icon: ICONS.product,
      },
      {
        title: "네이버",
        path: "https://naver.com",
        // children: [{ title: "sdfsd" }],
        // icon: ICONS.product,
      },
    ],
  },
];

export default navConfig;
