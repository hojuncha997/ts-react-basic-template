import React, { ReactNode, FC } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";


// type MainLayoutProps = {
//   children: ReactNode;
// };

// MainLayoutProps 타입의 children을 받고 React.ReactElement를 반환하는 함수
// function MainLayout({ children }: MainLayoutProps): React.ReactElement {
function MainLayout(): React.ReactElement {

  const navigate = useNavigate();

  const handleNavigate = (path:string) => {
    navigate(path);
  }

  return (
    <>
      <div>
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          borderBottom: "1px solid grey",
          padding: "0.5em",
          backgroundColor: "white", // 배경색 추가
          zIndex: 1000 // 다른 요소들 위에 표시되도록 z-index 설정
        }}>
          <div style={{width:"80%", maxWidth:"1100px", margin:"0 auto", display:"flex", justifyContent:"space-between"}}>
            <Link to="/" reloadDocument><img src="/images/s_ZAHIVE.png" alt="Zahive" style={{width:"150px"}} /></Link>
            <div>
              <ul style={{display:"flex", justifyContent:"flex-end", listStyle:"none", alignContent:"center"}}>
                <li style={{margin:"0 1em 0 1em"}}>login</li>
                <li style={{marginRight:"1em"}}>join</li>
                <li onClick={() => handleNavigate("/dashboard")} style={
                  {cursor:"pointer", margin:"0 1em 0 1em", color:"blue"}
                }>Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{width:"80%", maxWidth:"1100px", margin:"0 auto",
        paddingTop: "70px"         // 헤더의 높이만큼 상단 여백 추가
        }}>
          <Outlet />

        </div>
        <div style={{ background:"#eee", margin:"2rem auto"}}>
          <div style={{ padding:"2rem", background:"#eee" , width:"80%", maxWidth:"1100px", margin:"0 auto"}}>footer</div>
        </div>
      </div>
     
    </>
  );
}

export default MainLayout;

/*
import React, { ReactNode, FC } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>Main Layout</h1>
      {children}
    </div>
  );
};

export default MainLayout;

*/
