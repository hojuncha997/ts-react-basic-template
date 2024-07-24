// // type NavSectionVerticalProps = {
// //   data: any;
// //   items: NavListProps[];
// // };

// import NavList from "./NavList";
// // 실제적으로 네비게이션의 메뉴 구조를 생성하는 컴포넌트
// import { NavSectionProps } from "./types";

// export default function NavSectionVertical({
//   data,
//   ...other
// }: NavSectionProps) {
//   return (
//     <>
//       {/* data는 navConfig이고 group은 그 원소인 객체이다. Subheader는 대메뉴 명이다. */}
//       {data.map((group) => {
//         const key = group.subheader || group.items[0].title;

//         return (
//           <div key={key} {...other}>
//             {/* 대메뉴명이 표시된다 */}
//             {group.subheader && <div>{group.subheader}</div>}

//             {/* 대메뉴가 가진 items 배열는 소메뉴 객체들이 원소로서 존재한다 */}
//             {group.items.map((list) => {
//               // list는 소메뉴 객체
//               return (
//                 <>
//                   {/* 따라서 NavList는 소메뉴 객체를 받아서 렌더링한다 */}
//                   <NavList
//                     key={list.title + list.path}
//                     data={list}
//                     depth={1}
//                     hasChild={!!list.children}
//                   />
//                   {/* {list.title} */}
//                 </>
//               );
//             })}
//           </div>
//         );
//       })}
//     </>
//   );
// }

// /* <NavList>
//           {navConfig.map((item: NavSubItemProps, index: number) => (
//             <li key={index}>
//               <SubHeader onClick={() => toggleSubMenu(index)}>
//                 {item.subheader}
//               </SubHeader>
//               <SubMenu open={!!openSubMenus[index]}>
//                 {item.items.map((navItem, subIndex) => (
//                   <NavItem
//                     key={subIndex}
//                     onClick={() => handleNavigate(navItem.path, index)}
//                     active={pathname === navItem.path}
//                   >
//                     {navItem.title}
//                   </NavItem>
//                 ))}
//               </SubMenu>
//             </li>
//           ))}
//         </NavList> */

import React from "react";
import NavList from "./NavList";
import { NavSectionProps } from "./types";

export default function NavSectionVertical({
  data,
  ...other
}: NavSectionProps) {
  return (
    <>
      {data.map((group) => {
        const key = group.subheader || group.items[0].title;

        return (
          <div key={key} {...other}>
            {group.subheader && (
              <div style={{ fontWeight: "bold", margin: "10px 0" }}>
                {group.subheader}
              </div>
            )}

            {group.items.map((list) => (
              <NavList
                key={list.title + list.path}
                data={list}
                depth={1}
                hasChild={!!list.children}
              />
            ))}
          </div>
        );
      })}
    </>
  );
}
