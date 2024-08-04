// // import { Link as RouterLink } from "react-router-dom";

// // import { NavItemProps } from "./types";

// // export default function NavItem({
// //   item,
// //   depth,
// //   open,
// //   active,
// //   isExternalLink,
// //   ...other
// // }: NavItemProps) {
// //   const { title, path, icon, info, children, disabled, caption, roles } = item;

// //   // 반환값은 boolean
// //   const subItem = depth !== 1;

// //   const renderContent = (
// //     <div
// //       depth={depth}
// //       active={active}
// //       disabled={disabled}
// //       caption={!!caption}
// //       open={open}
// //       {...other}
// //     >
// //       {icon && <div>{icon}</div>}

// //       {subItem && <div>{/* <div active={active && subItem} /> */}</div>}

// //       {info && (
// //         <div>
// //           <div>{info}</div>
// //         </div>
// //       )}

// //       {!!children && (
// //         <div>
// //           <div>{children}</div>
// //         </div>
// //       )}
// //     </div>
// //   );

// //   const renderItem = () => {
// //     // External Link
// //     if (isExternalLink) {
// //       return (
// //         <a href={path} target="_blank" rel="noopener">
// //           {renderContent}
// //         </a>
// //       );
// //     }
// //   };

// //   return <div>{renderContent}</div>;

// //   //   return <div roles={roles}>{renderItem()}</div>;
// // }
// import { Link as RouterLink } from "react-router-dom";

// import { NavItemProps } from "./types";

// export default function NavItem({
//   item,
//   depth,
//   open,
//   active,
//   isExternalLink,
//   ...other
// }: NavItemProps) {
//   const { title, path, icon, info, children, disabled, caption, roles } = item;

//   console.log(
//     "item:",
//     item,
//     "depth:",
//     depth,
//     "open:",
//     open,
//     "active:",
//     active,
//     "isExternalLink:",
//     isExternalLink,
//     "other:",
//     other
//   );

//   // 반환값은 boolean
//   const subItem = depth !== 1;

//   const renderContent = (
//     <div
//       className={`nav-item ${active ? "active" : ""} ${
//         disabled ? "disabled" : ""
//       } ${open ? "open" : ""}`}
//       {...other}
//     >
//       {icon && <div>{icon}</div>}

//       {subItem && (
//         <div className={`sub-item ${active && subItem ? "active" : ""}`} />
//       )}

//       {info && (
//         <div>
//           <div>{info}</div>
//         </div>
//       )}

//       {!!children && (
//         <div>
//           <div>{children}</div>
//         </div>
//       )}
//     </div>
//   );

//   const renderItem = () => {
//     // External Link
//     if (isExternalLink) {
//       return (
//         <a href={path} target="_blank" rel="noopener noreferrer">
//           {renderContent}
//         </a>
//       );
//     }
//     // Internal Link
//     return <RouterLink to={path}>{renderContent}</RouterLink>;
//   };

//   return <div>{renderItem()}</div>;
//   //   return <div>{renderContent}</div>;
// }
import React from "react";
import { Link } from "react-router-dom";
import { NavItemProps } from "./types";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;

const ItemContent = styled.div<{ active: boolean; depth: number }>`
  padding: 10px;
  padding-left: ${(props) => props.depth * 20}px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#078DEE1F" : "transparent")};
  &:hover {
    background-color: #f5f5f5;
  }
`;

export default function NavItem({
  item,
  depth,
  open,
  active,
  isExternalLink,
  onClick,
  ...other
}: NavItemProps) {
  // 소메뉴 객체에서 각 속성들을 구조분해할당한다
  const { title, path, icon, children } = item;

  const renderContent = (
    <ItemContent active={active} depth={depth} onClick={onClick} {...other}>
      {icon && <span style={{ marginRight: "10px" }}>{icon}</span>}
      <span>{title}</span>
      {!!children && <span style={{ float: "right" }}>{open ? "▼" : "▶"}</span>}
    </ItemContent>
  );

  if(path === "") {
    return renderContent;
  }

  //   만약 소메뉴 객체의 path값이 외부링크라면 a태그로 새 탭에 띄운다
  if (isExternalLink) {
    return (
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {renderContent}
      </a>
    );
  }

  return <StyledLink to={path}>{renderContent}</StyledLink>;
}
