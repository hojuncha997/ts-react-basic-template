import styled from "styled-components";
import { ReactElement, useEffect, useState } from "react";
import useResponsive from "../../../hooks/useResponsive";

type HeaderProps = {
  onOpenNav: () => void;
};

function Header({ onOpenNav }: HeaderProps): ReactElement {
  const { width, height } = useResponsive();

  //   const [isDesktop, setIsDesktop] = useState(width > 768);

  return (
    <HeaderContainer>
      {width < 768 && (
        <HamburgerButton onClick={onOpenNav}>
          <div></div>
          <div></div>
          <div></div>
        </HamburgerButton>
      )}
      {/* {isDesktop ? <h1>desktop</h1> : <h1 onClick={onOpenNav}>iii</h1>} */}
      {/* {width > 768 ? <h1>desktop</h1> : <h1>mobile</h1>} */}
      <h1>Header</h1>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  border-bottom: 1px solid black;
  padding: 16px;
`;

const HamburgerButton = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1100;
  cursor: pointer;
  div {
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 5px 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
