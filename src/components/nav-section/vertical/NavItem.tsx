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
import { Link as RouterLink } from "react-router-dom";
import { NavItemProps } from "./types";

export default function NavItem({
  item,
  depth,
  open,
  active,
  isExternalLink,
  ...other
}: NavItemProps) {
  const { title, path, icon, children } = item;

  const renderContent = (
    <div
      style={{
        padding: "10px",
        cursor: "pointer",
        backgroundColor: active ? "#f0f0f0" : "transparent",
      }}
      {...other}
    >
      {icon && <span style={{ marginRight: "10px" }}>{icon}</span>}
      <span>{title}</span>
      {!!children && <span style={{ float: "right" }}>{open ? "▼" : "▶"}</span>}
    </div>
  );

  if (isExternalLink) {
    return (
      <a href={path} target="_blank" rel="noopener noreferrer">
        {renderContent}
      </a>
    );
  }

  return <RouterLink to={path}>{renderContent}</RouterLink>;
}
