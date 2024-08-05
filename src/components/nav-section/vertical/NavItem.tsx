// import React from "react";
// import { Link } from "react-router-dom";
// import { NavItemProps } from "./types";
// import styled from "styled-components";

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
//   &:hover {
//     text-decoration: none;
//   }
// `;

// const ItemContent = styled.div<{ active: boolean; depth: number }>`
//   // padding: 10px;
//   // padding-left: ${(props) => props.depth * 5}px;
//   font-size: 0.9rem;
//   cursor: pointer;
//   background-color: ${(props) => (props.active ? "#078DEE1F" : "transparent")};
//   &:hover {
//     background-color: #f5f5f5;
//   }
// `;

// export default function NavItem({
//   item,
//   depth,
//   open,
//   active,
//   isExternalLink,
//   onClick,
//   ...other
// }: NavItemProps) {
//   // 소메뉴 객체에서 각 속성들을 구조분해할당한다
//   // const { title, path, icon, children } = item;
//   const { title, path, icon, info, children, disabled, caption, roles } = item;

//   // 반환값은 boolean
//   const subItem = depth !== 1;

//   const renderContent = (
//     <ItemContent
//       depth={depth}
//       active={active}
//       // disabled={disabled}
//       // caption={!!caption}
//       onClick={onClick}
//       {...other}
//     >
//       {icon && <span style={{ marginRight: "10px" }}>{icon}</span>}
//       <span style={{ fontSize: "0.9rem", fontWeight: "600" }}>{title}</span>
//       {!!children && <span style={{ float: "right" }}>{open ? "▼" : "▶"}</span>}
//     </ItemContent>
//   );

//   if (path === "") {
//     return renderContent;
//   }

//   //   만약 소메뉴 객체의 path값이 외부링크라면 a태그로 새 탭에 띄운다
//   if (isExternalLink) {
//     return (
//       <a
//         href={path}
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{
//           textDecoration: "none",
//           // color: "inherit",
//           color: "blue",
//           fontSize: "0.8rem",
//           fontWeight: "600",
//         }}
//       >
//         {renderContent}
//       </a>
//     );
//   }

//   return <StyledLink to={path}>{renderContent}</StyledLink>;
// }
import React from "react";
import { Link } from "react-router-dom";
import { NavItemProps } from "./types";
import styled from "styled-components";
// import Iconify from "../../iconify";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;

const StyledItem = styled.div<{
  active: boolean;
  depth: number;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  padding-left: ${(props) => props.depth * 16}px;
  font-size: 0.875rem;
  font-weight: ${(props) => (props.active ? 600 : 400)};
  color: ${(props) =>
    props.disabled ? "#919EAB" : props.active ? "#212B36" : "#637381"};
  background-color: ${(props) => (props.active ? "#078DEE1F" : "transparent")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "transparent" : "#F4F6F8"};
  }
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  & > svg {
    width: 20px;
    height: 20px;
  }
`;

const StyledDotIcon = styled.span<{ active: boolean }>`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#212B36" : "#919EAB")};
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
  const { title, path, icon, info, children, disabled, caption, roles } = item;

  const subItem = depth !== 1;

  const renderContent = (
    <StyledItem
      depth={depth}
      active={active}
      disabled={disabled}
      onClick={onClick}
      {...other}
    >
      {icon && <StyledIcon>{icon}</StyledIcon>}

      {subItem && (
        <StyledIcon>
          <StyledDotIcon active={active && subItem} />
        </StyledIcon>
      )}

      <span>{title}</span>

      {info && <span style={{ marginLeft: "auto" }}>{info}</span>}

      {/* {!!children && (
        <Iconify
          icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
          style={{ marginLeft: 'auto', width: 16, height: 16, flexShrink: 0 }}
        />
      )} */}
    </StyledItem>
  );

  if (path === "") {
    return renderContent;
  }

  if (isExternalLink) {
    return (
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        {renderContent}
      </a>
    );
  }

  return <StyledLink to={path}>{renderContent}</StyledLink>;
}
