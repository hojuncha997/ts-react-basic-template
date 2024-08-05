// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import useActiveLink from "../../../hooks/useActiveLink";
// import { NavListProps, NavListRootProps } from "./types";
// import NavItem from "./NavItem";

// export default function NavList({
//   data,
//   depth,
//   hasChild,
//   onCloseNav,
// }: // toggleSection,
// NavListRootProps) {
//   const { pathname } = useLocation();
//   const { active, isExternalLink } = useActiveLink(data.path);
//   const [open, setOpen] = useState(active);

//   useEffect(() => {
//     if (!active) {
//       handleClose();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   const handleToggle = () => {
//     // 메뉴를 클릭했을 때 open을 반전시킨다. 즉, 열려있는 메뉴를 닫거나 닫혀있는 메뉴를 열게 한다.
//     setOpen(!open);
//     // alert("handleToggle");
//     // toggleSection("BELT");

//     // 메뉴를 클릭했을 때 path가 빈 문자열이라면 네비게이션바를 닫지 않고
//     if (data.path === "") {
//       return;
//     }
//     onCloseNav();
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   console.log("data:", data, "depth:", depth, "hasChild:", hasChild);

//   return (
//     <>
//       {/* <div style={{ marginLeft: `${depth * 20}px` }}> */}
//       <NavItem
//         item={data}
//         depth={depth}
//         open={open}
//         active={active}
//         isExternalLink={isExternalLink}
//         onClick={handleToggle}
//       />

//       {/*  hasChild가 true이고 open이 true이며 data.children이 존재하면 하위 메뉴를 렌더링한다. */}
//       {/* {hasChild && open && data.children && (
//         <div>
//           {data.children.map((childItem) => (
//             <NavList
//               key={childItem.title + childItem.path}
//               data={childItem}
//               depth={depth + 1}
//               hasChild={!!childItem.children}
//               onCloseNav={onCloseNav}
//             />
//           ))}
//         </div>
//       )} */}
//       {/* </div> */}
//     </>
//   );
// }

// type NavListSubProps = {
//   data: NavListProps[];
//   depth: number;
// };

// function NavSubList({ data, depth }: NavListSubProps) {
//   return (
//     <>
//       {data.map((list) => (
//         <NavList
//           key={list.title + list.path}
//           data={list}
//           depth={depth + 1}
//           hasChild={!!list.children}
//         />
//       ))}
//     </>
//   );
// }

// /*
//   data: {
//     "title": "상품목록",
//     "path": "/dashboard/product",
//     "children": [
//         {"title": "서브메뉴1", "path": "/sub1" },
//         {"title": "서브메뉴2", "path": "/sub2" }
//     ]
//   },
//     depth: 1,
//     hasChild: true
//     */

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import useActiveLink from "../../../hooks/useActiveLink";
// import { NavListProps, NavListRootProps } from "./types";
// import NavItem from "./NavItem";
// import Collapse from "../../common/Collapse";

// export default function NavList({
//   data,
//   depth,
//   hasChild,
//   onCloseNav,
// }: NavListRootProps) {
//   const { pathname } = useLocation();
//   const { active, isExternalLink } = useActiveLink(data.path);
//   const [open, setOpen] = useState(active);

//   useEffect(() => {
//     if (!active) {
//       handleClose();
//     }
//   }, [pathname, active]);

//   const handleToggle = () => {
//     if (hasChild) {
//       setOpen(!open);
//     } else {
//       // 만약 자식이 없으면 네비게이션바를 닫지 않고 해당 페이지로 이동한다.
//       setOpen(true);
//     }

//     // setOpen(!open);
//     if (data.path === "") {
//       return;
//     }
//     onCloseNav();
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <NavItem
//         item={data}
//         depth={depth}
//         open={open}
//         active={active}
//         isExternalLink={isExternalLink}
//         onClick={handleToggle}
//       />

//       {/* {hasChild && data.children && ( */}
//       {hasChild && (
//         <Collapse in={open} unmountOnExit>
//           <NavSubList
//             data={data.children ?? []}
//             depth={depth}
//             onCloseNav={onCloseNav}
//           />
//         </Collapse>
//       )}
//     </>
//   );
// }

// type NavListSubProps = {
//   data: NavListProps[];
//   depth: number;
//   onCloseNav: () => void;
// };

// function NavSubList({ data, depth, onCloseNav }: NavListSubProps) {
//   return (
//     <>
//       {data.map((list) => (
//         <NavList
//           key={list.title + list.path}
//           data={list}
//           depth={depth + 1}
//           hasChild={!!list.children}
//           onCloseNav={onCloseNav}
//         />
//       ))}
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useActiveLink from "../../../hooks/useActiveLink";
import { NavListProps, NavListRootProps } from "./types";
import NavItem from "./NavItem";
import Collapse from "../../common/Collapse";

export default function NavList({
  data,
  depth,
  hasChild,
  onCloseNav,
}: NavListRootProps) {
  const { pathname } = useLocation();
  const { active, isExternalLink } = useActiveLink(data.path);
  const [open, setOpen] = useState(active);

  // useEffect(() => {
  //   if (active) {
  //     setOpen(true);
  //   }
  // }, [active]);

  // const handleToggle = () => {
  //   if (hasChild) {
  //     setOpen(!open);
  //   } else {
  //     // 만약 자식이 없으면 네비게이션바를 닫는다.
  //     onCloseNav();
  //   }
  // };

  const handleToggle = () => {
    // 메뉴를 클릭했을 때 open을 반전시킨다. 즉, 열려있는 메뉴를 닫거나 닫혀있는 메뉴를 열게 한다.
    setOpen(!open);
    // alert("handleToggle");
    // toggleSection("BELT");

    // 메뉴를 클릭했을 때 path가 빈 문자열이라면 네비게이션바를 닫지 않고
    if (data.path === "") {
      return;
    }
    onCloseNav();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavItem
        item={data}
        depth={depth}
        open={open}
        active={active}
        isExternalLink={isExternalLink}
        onClick={handleToggle}
      />

      {hasChild && (
        <Collapse in={open}>
          <NavSubList
            data={data.children ?? []}
            depth={depth}
            onCloseNav={onCloseNav}
          />
        </Collapse>
      )}
    </>
  );
}

type NavListSubProps = {
  data: NavListProps[];
  depth: number;
  onCloseNav: () => void;
};

function NavSubList({ data, depth, onCloseNav }: NavListSubProps) {
  return (
    <>
      {data.map((list) => (
        <NavList
          key={list.title + list.path}
          data={list}
          depth={depth + 1}
          hasChild={!!list.children}
          onCloseNav={onCloseNav}
        />
      ))}
    </>
  );
}
