import React, { useState, useEffect, ReactElement } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";
import useResponsive from "../../../hooks/useResponsive";
import navConfig from "./nav-config";
import { NAV } from "../../../config-global";

type NavVerticalProps = {
  openNav: boolean;
  onCloseNav: () => void;
};

export function NavVertical({
  openNav,
  onCloseNav,
}: NavVerticalProps): ReactElement {
  const [enableTransition, setEnableTransition] = useState(false);
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

  const handleNavigate = (path: string) => {
    onCloseNav();
    navigate(path);
  };

  const closeNav = () => {
    onCloseNav();
  };

  return (
    <>
      <GlobalStyle />

      <NavContainer openNav={openNav} enableTransition={enableTransition}>
        <NavList>
          {navConfig.map((item, index) => (
            <li key={index}>
              <h3>{item.subheader}</h3>
              <NavList>
                {item.items.map((navItem, index) => (
                  <NavItem
                    key={index}
                    onClick={() => handleNavigate(navItem.path)}
                  >
                    {navItem.title}
                  </NavItem>
                ))}
              </NavList>
            </li>
          ))}
        </NavList>
      </NavContainer>
      {width < 768 && <Backdrop openNav={openNav} onClick={closeNav} />}
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

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
    /*
    여기에 transition:none을 추가해도 transition이 적용된다.
    
    미디어 쿼리는 스타일 시트의 일부로서 CSS에 의해 적용되기 때문에,
    JavaScript에 의해 동적으로 변경되는 상태를 처리하는 데는 한계가 있다.
     미디어 쿼리는 CSS 파일이 처음 로드될 때 적용되므로,
     화면 크기가 변경될 때 실시간으로 반응하지 않을 수 있다.

     따라서 JS를 통해서 동적으로 상태를 관리하고 그 상태를 사용해서
     실시간으로 스타일을 변경할 수 있도록 했다.
     */
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
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  cursor: pointer;
  padding: 8px 16px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

/*

미디어쿼리가 변화를 반응하는 속도가 자바스크립트의 상태가 변화하는 속도를 따라잡지 못하기 때문이라고
생각해도 무방하다.

미디어 쿼리의 반응:

미디어 쿼리는 브라우저에 의해 지속적으로 모니터링되지만, 이 과정은 비동기적이며 약간의 지연이 있을 수 있다.
브라우저는 레이아웃 변경을 최적화하기 위해 미디어 쿼리의 재평가를 지연시킬 수 있다.

JavaScript의 상태 변화:

반면, JavaScript의 상태 변화는 즉각적으로 발생하며,
React와 같은 프레임워크는 이러한 변화를 신속하게 DOM에 반영한다.

타이밍 차이:
화면 크기가 변경될 때, JavaScript는 이벤트를 즉시 감지하고 상태를 업데이트할 수 있다.
그러나 미디어 쿼리가 이 변화를 감지하고 스타일을 적용하는 데에는 약간의 시간이 걸릴 수 있다.

일관성 문제:
이러한 타이밍 차이로 인해, JavaScript로 제어되는 요소와 순수 CSS(미디어 쿼리)로 제어되는 요소 간에 일시적인 불일치가 발생할 수 있다.

해결 방법:
코드에서 사용된 방법처럼, JavaScript를 사용하여 화면 크기 변화를 감지하고 이에 따라 스타일을 직접 제어하면,
 이러한 타이밍 문제를 해결하고 더 일관된 사용자 경험을 제공할 수 있다.

결론:
JavaScript를 사용한 동적 상태 관리는 미디어 쿼리보다 더 빠르고 유연하게 반응할 수 있어,
복잡한 반응형 레이아웃에서 더 나은 제어와 일관성을 제공할 수 있다.

*/
