import React, { ReactNode, FC } from "react";
import { Outlet } from "react-router-dom";

// type MainLayoutProps = {
//   children: ReactNode;
// };

// MainLayoutProps 타입의 children을 받고 React.ReactElement를 반환하는 함수
// function MainLayout({ children }: MainLayoutProps): React.ReactElement {
function MainLayout(): React.ReactElement {
  return (
    <div>
      <h1>Main Layout</h1>
      <Outlet />
    </div>
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
