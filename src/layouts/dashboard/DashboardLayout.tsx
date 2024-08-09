import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";
import Header from "./header/Header";
import { NavVertical } from "./nav/NavVertical";
import Searchbar from "./header/Searchbar";

export default function DashboardLayout() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [openSearchbar, setOpenSearchbar] = useState<boolean>(false);

  const handleOpen = () => {
    setOpenNav(true);
  };

  const handleClose = () => {
    setOpenNav(false);
  };


  const handleSearchbarOpen = () => {
    setOpenSearchbar(true);
  }

  const handleSearchbarClose = () => {
    setOpenSearchbar(false);
  }

  const renderNavVertical = () => (
    <NavVertical openNav={openNav} onCloseNav={handleClose} />
  );

  return (
    <>
    <LayoutContainer>
      {renderNavVertical()}

      <ContentContainer>
        <Header onOpenNav={handleOpen} onOpenSearchbar={handleSearchbarOpen} />
        <Main>
          <Outlet />
        </Main>
      </ContentContainer>
      {/* {openSearchbar &&
        <Searchbar isOpen={openSearchbar} onCloseSearchbar={handleSearchbarClose} />
      } */}
      <Searchbar isOpen={openSearchbar} onCloseSearchbar={handleSearchbarClose} />


    </LayoutContainer>
    
    </>
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
