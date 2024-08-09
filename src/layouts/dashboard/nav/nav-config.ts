import path from "path";
import { PATH_DASHBOARD } from "../../../routes/paths";

const navConfig = [
  {
    subheader: "메인",
    items: [
      {
        title: "메인",
        path: "/",
        // path: PATH_DASHBOARD.APP,
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
        children: [
          { title: "add", path: PATH_DASHBOARD.product.add },
          { title: "list", path: PATH_DASHBOARD.product.list },
        ],
        // icon: ICONS.product,
      },
      // {
      //   title: "뎁스1",
      //   path: PATH_DASHBOARD.product.root,
      //   // path: "",
      //   children: [
      //     {
      //       title: "뎁스2",
      //       // path: PATH_DASHBOARD.product.root,
      //       path: PATH_DASHBOARD.product.list,
      //       children: [
      //         { title: "뎁스3메뉴1", path: "/sub3" },
      //         { title: "뎁스3메뉴2", path: "/sub2" },
      //       ],
      //     },
      //   ],
      //   // icon: ICONS.product,
      // },
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
        title: "사용자 페이지",
        path: "https://naver.com",
        // children: [{ title: "sdfsd" }],
        // icon: ICONS.product,
      },
    ],
  },
];

export default navConfig;
