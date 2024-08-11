import React, { useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";

function MainLayout(): React.ReactElement {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh' 
    }}>
      <div style={{ backgroundColor: "black", padding: "1em", color:"white", display:"flex", justifyContent:"center" }}>
        <span>이벤트 중입니다</span>
      </div>
      <header 
        style={{
          position: "sticky",
          top: 0,
          borderBottom: "1px solid grey",
          backgroundColor: "white",
          zIndex: 1000
        }}
      >
        <div style={{
          width: "90%",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px",
          position: "relative"
        }}>
          <Link to="/" reloadDocument style={{
            display: "flex",
            alignItems: "center",
            height: "100%"
          }}>
            <img src="/images/s_ZAHIVE.png" alt="Zahive" style={{ width: "150px" }} />
          </Link>
          
          <nav
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ position: "static" }}
          >
            <ul style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              listStyle: "none",
              height: "100%",
              margin: 0,
              padding: 0
            }}>
              <li style={{
                margin: "0 1em",
                display: "flex",
                alignItems: "center",
                height: "100%"
              }}>login</li>
              <li style={{
                marginRight: "1em",
                display: "flex",
                alignItems: "center",
                height: "100%"
              }}>join</li>
              <li onClick={() => handleNavigate("/dashboard")} style={{
                cursor: "pointer",
                margin: "0 1em",
                color: "blue",
                display: "flex",
                alignItems: "center",
                height: "100%"
              }}>Dashboard</li>
            </ul>
          </nav>
        </div>
        <div 
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            height: isHovered ? "200px" : "0px",
            overflow: "hidden",
            transition: "height 0.3s ease-in-out",
            // backgroundColor: "#f8f8f8",
            backgroundColor: "white",
            borderTop: isHovered ? "1px solid #e0e0e0" : "none",
            boxShadow: isHovered ? "0 4px 6px rgba(0,0,0,0.1)" : "none"
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div style={{
            width: "90%",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "20px 0",
            display: "flex",
            justifyContent: "space-between"
          }}>
            <div>
              <h3>카테고리 1</h3>
              <ul>
                <li>서브메뉴 1</li>
                <li>서브메뉴 2</li>
                <li>서브메뉴 3</li>
              </ul>
            </div>
            <div>
              <h3>카테고리 2</h3>
              <ul>
                <li>서브메뉴 1</li>
                <li>서브메뉴 2</li>
                <li>서브메뉴 3</li>
              </ul>
            </div>
            <div>
              <h3>카테고리 3</h3>
              <ul>
                <li>서브메뉴 1</li>
                <li>서브메뉴 2</li>
                <li>서브메뉴 3</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      
      <main style={{
        flex: 1,
        width: "90%",
        maxWidth: "1100px",
        margin: "0 auto",
        paddingTop: "20px"
      }}>
        <Outlet />
      </main>
      <footer style={{ 
        background: "#eee", 
        marginTop: "2rem"
      }}>
        <div style={{ 
          padding: "2rem", 
          background: "#eee", 
          width: "80%", 
          maxWidth: "1100px", 
          margin: "0 auto" 
        }}>
          footer
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;


/*
position: sticky의 특징과 사용법:

1. position: sticky의 주요 특징:
   a. 일반적인 문서 흐름을 따르다가 특정 임계점에 도달하면 고정된다.
   b. 부모 요소의 범위 내에서만 고정된다.
   c. 스크롤 방향에 따라 동적으로 동작한다.

2. "일반적인 문서의 흐름을 따른다"의 의미:
   - HTML 요소들은 기본적으로 위에서 아래로, 왼쪽에서 오른쪽으로 배치된다. 이것이 "일반적인 문서의 흐름"이다.
   - position: sticky 요소는 처음에는 이 흐름을 따라 배치되어, 다른 요소들처럼 자연스럽게 페이지에 위치한다.
   - 스크롤하여 지정된 임계점(예: top: 0)에 도달할 때까지는 일반 요소처럼 동작한다.

3. position: sticky 사용 방법:
   .sticky-element {
     position: sticky;
     top: 0; // 상단에서의 거리. 이 지점에 도달하면 고정됨
     z-index: 100; // 다른 요소 위에 표시되도록
   }

4. 동작 예시:
   - 스크롤 전: 요소가 일반적인 위치에 있음
   - 스크롤 중 (임계점 도달): 요소가 화면에 고정됨
   - 부모 요소를 벗어나는 스크롤: 요소가 부모와 함께 스크롤되어 올라감

5. 사용 사례:
   - 네비게이션 바
   - 섹션 헤더
   - 목차나 색인
   - 광고 배너

6. 주의사항:
   - 부모 요소에 overflow: hidden이 설정되어 있으면 제대로 동작하지 않을 수 있다.
   - 모든 브라우저에서 지원되지 않을 수 있으므로, 호환성 확인이 필요하다.

7. position: fixed와의 차이점:
   - fixed는 항상 뷰포트에 고정되지만, sticky는 부모 요소 내에서만 고정된다.
   - sticky는 스크롤 방향에 따라 동적으로 동작하며, 원래 위치로 돌아갈 수 있다.

position: sticky를 사용하면 사용자 경험을 향상시키면서도 자연스러운 페이지 레이아웃을 유지할 수 있다. 
특히 긴 페이지에서 중요한 요소를 항상 보이게 하고 싶을 때 유용하다.
*/

