import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useResponsive from "../../../hooks/useResponsive";
import navConfig from "./nav-config";
import { NAV } from "../../../config-global";
import NavSectionVertical from "../../../components/nav-section/vertical/NavSectionVertical";

type NavVerticalProps = {
  // 네비게이션 열림 여부
  openNav: boolean;

  // 네비게이션 닫기 함수
  onCloseNav: () => void;
};

export function NavVertical({ openNav, onCloseNav }: NavVerticalProps) {
  const { pathname } = useLocation();
  const { width } = useResponsive();

  // 페이지 이동에 따라 pathname이 변경되면서 네비게이션을 닫는다. 따라서 NavSectionVertical에 onCloseNav를 전달할 필요가 없다.
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <div style={{ height: "100%", overflowY: "auto" }}>
      {/* <NavSectionVertical data={navConfig} onCloseNav={onCloseNav} /> */}
      <NavSectionVertical data={navConfig} />
    </div>
  );

  return (
    <>
      <NavContainer openNav={openNav}>{renderContent}</NavContainer>

      {/* 너비가 768픽셀보다 작으면 백드롭을 렌더링한다. 백드롭에는 openNav와  */}
      {width < 768 && <Backdrop openNav={openNav} onClick={onCloseNav} />}
    </>
  );
}

const NavContainer = styled.div<{ openNav: boolean }>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.openNav ? "0" : `-${NAV.W_DASHBOARD}px`)};
  width: ${NAV.W_DASHBOARD}px;
  height: 100vh;
  border-right: 1px solid black;
  overflow-y: auto;
  background-color: lightskyblue;
  z-index: 1200;
  transition: left 0.3s ease;

  @media (min-width: 768px) {
    left: 0;
    position: static;
    display: block;
  }
`;

const Backdrop = styled.div<{ openNav: boolean }>`
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
