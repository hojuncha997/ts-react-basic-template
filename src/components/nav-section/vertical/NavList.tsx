// import { useState, useEffect } from "react";

// import { useLocation } from "react-router-dom";
// // import { Collapse } from "../../../components/common";
// import Collapse from "../../common/Collapse";

// // 메뉴의 대매뉴가 활성화인지, 소메뉴가 활성화인지, 외부 링크인지 확인
// import useActiveLink from "../../../hooks/useActiveLink";

// import { NavListProps } from "./types";
// import NavItem from "./NavItem";

// type NavListRootProps = {
//   data: NavListProps;
//   depth: number;
//   hasChild: boolean;
// };

// export default function NavList({ data, depth, hasChild }: NavListRootProps) {
//   const { pathname } = useLocation();

//   console.log("data:", data, "depth:", depth, "hasChild:", hasChild);
//   //   data: {"title": "단증", "path": "/dashboard/belt"} depth: 1 hasChild: false

//   //   현재 pathname과 data.path가 일치하면 active가 true가 된다.
//   const { active, isExternalLink } = useActiveLink(data.path);

//   // active가 true이면 open도 true로 설정. 즉, 활성화된 메뉴는 열려있는 상태로 유지된다.
//   const [open, setOpen] = useState(active);

//   //   pathname이 변경되면 active가 반전되어 false가 되므로 닫히게 된다.
//   useEffect(() => {
//     if (!active) {
//       handleClose();
//     }
//   }, [pathname]);

//   //   메뉴를 클릭하면 open이 반전된다.q33333
//   const handleToggle = () => {
//     // setOpen((prev) => !prev);
//     setOpen(!open);
//   };

//   //   메뉴를 닫는다.
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div style={{ border: "1px solid red", margin: "5px", padding: "5px" }}>
//       <NavItem
//         item={data}
//         depth={depth}
//         open={open}
//         active={active}
//         isExternalLink={isExternalLink}
//         onClick={handleToggle}
//       />

//       {hasChild && data.children && (
//         <div
//           style={{ border: "1px solid blue", margin: "5px", padding: "5px" }}
//         >
//           {data.children.map((childItem: NavListProps) => (
//             <NavList
//               key={childItem.title + childItem.path}
//               data={childItem}
//               depth={depth + 1}
//               hasChild={!!childItem.children}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// // --------------------------------------------------

// type NavSubListProps = {
//   data: NavListProps[];
//   depth: number;
// };

// function NavSubList({ data, depth }: NavSubListProps) {
//   return (
//     <>
//       {data.map((list) => {
//         return (
//           <>
//             <NavList
//               key={list.title + list.path}
//               data={list}
//               depth={depth + 1}
//               hasChild={!!list.children}
//             />
//             {list.children.toString()}
//           </>
//         );
//       })}
//     </>
//   );
// }
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useActiveLink from "../../../hooks/useActiveLink";
import { NavListProps } from "./types";
import NavItem from "./NavItem";

type NavListRootProps = {
  data: NavListProps;
  depth: number;
  hasChild: boolean;
};

export default function NavList({ data, depth, hasChild }: NavListRootProps) {
  const { pathname } = useLocation();
  const { active, isExternalLink } = useActiveLink(data.path);
  const [open, setOpen] = useState(active);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div style={{ marginLeft: `${depth * 20}px` }}>
      <NavItem
        item={data}
        depth={depth}
        open={open}
        active={active}
        isExternalLink={isExternalLink}
        onClick={handleToggle}
      />

      {hasChild && open && data.children && (
        <div>
          {data.children.map((childItem) => (
            <NavList
              key={childItem.title + childItem.path}
              data={childItem}
              depth={depth + 1}
              hasChild={!!childItem.children}
            />
          ))}
        </div>
      )}
    </div>
  );
}
