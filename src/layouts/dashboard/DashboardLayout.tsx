import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";
import Header from "./header/Header";
import NavVertical  from "./nav/NavVertical";

export default function DashboardLayout() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleOpen = () => {
    setOpenNav(true);
  };

  const handleClose = () => {
    setOpenNav(false);
  };

  const renderNavVertical = () => (
    <NavVertical openNav={openNav} onCloseNav={handleClose} />
  );

  return (
    <LayoutContainer>
      {renderNavVertical()}
      {/* <NavVertical openNav={openNav} onCloseNav={handleClose} /> */}

      <ContentContainer>
        <Header onOpenNav={handleOpen} />
        <Main>
          <Outlet />
        </Main>
      </ContentContainer>
    </LayoutContainer>
  );
}

type LayoutContainerProps = {
  children: React.ReactNode;
};

const LayoutContainer = styled.div<LayoutContainerProps>`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
