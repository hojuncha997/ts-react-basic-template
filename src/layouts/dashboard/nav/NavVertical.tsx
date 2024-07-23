import React, { useState, useEffect, ReactElement, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import useResponsive from "../../../hooks/useResponsive";
import navConfig from "./nav-config";
import { NAV } from "../../../config-global";
import NavSectionVertical from "../../../components/nav-section/vertical/NavSectionVertical";

type NavVerticalProps = {
  openNav: boolean;
  onCloseNav: () => void;
};

type NavItemProps = {
  title: string;
  path: string;
};

type NavSubItemProps = {
  subheader: string;
  items: NavItemProps[];
};

export function NavVertical({
  openNav,
  onCloseNav,
}: NavVerticalProps): ReactElement {
  const [enableTransition, setEnableTransition] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: number]: boolean }>(
    {}
    // {1: true, 2: false, 3: true} 이런식으로 객체를 만들어서 관리한다. true이면 열리고 false이면 닫힌다.
  );
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { width } = useResponsive();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (width < 768) {
      setEnableTransition(true);
    } else {
      setEnableTransition(false);
    }
  }, [width]);

  const handleNavigate = (path: string, index: number) => {
    // 선택된 메뉴의 아코디언만 열어둠
    setOpenSubMenus({ [index]: true });

    // 네비게이션 닫기
    onCloseNav();

    // 해당 경로로 이동
    navigate(path);
  };

  const toggleSubMenu = useCallback((index: number) => {
    setOpenSubMenus((prevOpenSubMenus) => {
      // 이전 상태를 복사
      const newOpenSubMenus = { ...prevOpenSubMenus };
      // 클릭한 서브메뉴의 상태를 반전. 만약 처음 클릭한 메뉴라면 해당 인덱스가 등록되며 undefined가 반전되며 true가 등록된다.
      // 만약 이미 존재하는 인덱스라면 true가 false로 false가 true로 바뀐다.
      newOpenSubMenus[index] = !newOpenSubMenus[index];
      // 변경된 상태를 반환
      return newOpenSubMenus;
    });
  }, []);

  const closeNav = () => {
    onCloseNav();
  };

  const renderContent = (
    <div style={{ height: "100%", overflowY: "auto" }}>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            paddingTop: "24px",
            paddingBottom: "16px",
            paddingLeft: "20px",
            paddingRight: "20px",
            flexShrink: 0,
          }}
        ></div>
        <NavSectionVertical data={navConfig} />
        <div style={{ flexGrow: 1 }} />
      </div>
    </div>
  );
  return (
    <>
      <NavContainer openNav={openNav} enableTransition={enableTransition}>
        <NavList>
          {navConfig.map((item: NavSubItemProps, index: number) => (
            <li key={index}>
              <SubHeader onClick={() => toggleSubMenu(index)}>
                {item.subheader}
              </SubHeader>
              <SubMenu open={!!openSubMenus[index]}>
                {item.items.map((navItem, subIndex) => (
                  <NavItem
                    key={subIndex}
                    onClick={() => handleNavigate(navItem.path, index)}
                    active={pathname === navItem.path}
                  >
                    {navItem.title}
                  </NavItem>
                ))}
              </SubMenu>
            </li>
          ))}
        </NavList>
      </NavContainer>
      {width < 768 && <Backdrop openNav={openNav} onClick={closeNav} />}
    </>
  );
}

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `;

type NavContainerProps = {
  openNav: boolean;
  enableTransition: boolean;
};

const NavContainer = styled.div<NavContainerProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.openNav ? "0" : `-${NAV.W_DASHBOARD}px`)};
  width: ${NAV.W_DASHBOARD}px;
  height: 100vh;
  border-right: 1px solid black;
  overflow-y: auto;
  background-color: white;
  z-index: 1200;
  transition: ${(props) =>
    props.enableTransition ? "left 0.3s ease" : "none"};

  @media (min-width: 768px) {
    left: 0;
    position: static;
    display: block;
  }
`;

type BackdropProps = {
  openNav: boolean;
};

const Backdrop = styled.div<BackdropProps>`
  display: ${(props) => (props.openNav ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 500;
  transition: opacity 0.3s ease;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  font-size: 1rem;
  color: black;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li<{ active: boolean }>`
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5em;
  &:hover {
    background-color: #eee;
  }

  color: ${(props) => (props.active ? "red" : "black")};
`;

const SubHeader = styled.h3`
  cursor: pointer;
  padding: 0.5em;
  margin: 0;
  &:hover {
    background-color: #ddd;
  }
`;

const SubMenu = styled.ul<{ open: boolean }>`
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: ${(props) => (props.open ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;
