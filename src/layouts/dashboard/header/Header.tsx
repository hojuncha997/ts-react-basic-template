import styled from "styled-components";
import { ReactElement, useEffect, useRef, useState } from "react";
import useResponsive from "../../../hooks/useResponsive";
// import {s_Zahive, s_Orange_svg} from "../../../../public/images";
import logo_Orange from "../../../../public/images/logo_Orange.svg";
import Searchbar from "./Searchbar";

type HeaderProps = {
  onOpenNav: () => void;
  onOpenSearchbar: () => void;
};

function Header({ onOpenNav, onOpenSearchbar }: HeaderProps): ReactElement {
  const [showMyMenu, setShowMyMenu] = useState<boolean>(false);

  const { width, height } = useResponsive();

  // 아랫줄의 의미는 myMenuRef.current가 null이 아닐 때만 myMenuRef.current를 참조하겠다는 의미
  const myMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        myMenuRef.current &&
        !myMenuRef.current.contains(event.target as Node)
      ) {
        setShowMyMenu(false);
      }
    };

    // 이벤트 리스너 등록: 마우스 다운 이벤트가 발생하면 handleClickOutside 함수를 실행. 클릭은 눌렀다 떼면서 이벤트가 발생한다. 마우스 다운은 클릭과 동시에 발생한다.
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const [showSearchbar, setShowSearchbar] = useState<boolean>(false);

  const toggleSearchbar = () => {
    // setShowSearchbar(!showSearchbar);
    onOpenSearchbar();
  };
  //   const [isDesktop, setIsDesktop] = useState(width > 768);

  return (
    <>
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
        {/* <h1>Header</h1> */}
        <div
          style={{
            fontSize: "1em",
            color: "blue",
            fontWeight: "600",
            // fontStyle: "italic",
            display: "flex",
            alignItems: "center",
            height: "100%",
            // lineHeight: "1",
            transform: "translateY(2px)",
          }}
        >
          {/* <img src="/images/logo_Orange.svg" alt="Zahive" /> */}
          {/* <img src="/images/logo_Orange.svg" alt="Zahive" width="100" height="auto" /> */}
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "lightcoral",
            alignContent: "center",
          }}
        >
          <div
            style={{ border: "1px solid grey", padding: "0.1rem" }}
            onClick={toggleSearchbar}
          >
            검색
          </div>
          <div
            style={{
              border: "1px solid grey",
              padding: "0.1rem",
              position: "relative",
              display: "inline-block",
            }}
            // ref를 사용하여 이벤특가 발생한 요소를 참조할 수 있다.
            ref={myMenuRef}
            onClick={() => setShowMyMenu(!showMyMenu)}
          >
            MY
          </div>
          {showMyMenu && (
            <div
              ref={myMenuRef}
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
                border: "1px solid black",

                position: "absolute",
                top: "4em",
                right: "1em",
                padding: "1em",
                // fontSize: "0.8em",
              }}
            >
              <div>마이페이지</div>
              <div>장바구니</div>
              <div>로그아웃</div>
            </div>
          )}
        </div>

        {/* {showSearchbar && <Searchbar showSearchbar={showSearchbar} onToggle={toggleSearchbar}/>} */}
      </HeaderContainer>
      {/* <Searchbar showSearchbar={showSearchbar} onToggle={toggleSearchbar}/> */}
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 1.5em;
  }
`;

const HamburgerButton = styled.div`
  // position: fixed;
  top: 10px;
  // left: 10px;
  z-index: 1100;
  cursor: pointer;
  div {
    width: 25px;
    height: 0.9px;
    background-color: #000;
    margin: 5px 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
