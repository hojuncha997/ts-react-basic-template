import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NavSectionVertical from '../../../components/nav-section/vertical/NavSectionVertical';
import NavToggleButton from '../../dashboard/nav/NavToggleButton';
import navConfig from '../nav/nav-config';


// const NavContainer = styled.nav<{ open: boolean }>`
const NavContainer = styled.nav<{ open: boolean }>`

  width: 280px;
  height: 100vh;
  background-color: #f5f5f5;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
`;

const NavContent = styled.div`
  padding: 20px;
`;

interface NavVerticalProps {
  openNav: boolean;
  onCloseNav: () => void;
}

const NavVertical: React.FC<NavVerticalProps> = ({ openNav, onCloseNav }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname, openNav, onCloseNav]);

  return (
    <NavContainer open={openNav}>
      <NavToggleButton onClick={onCloseNav} isNavOpen={openNav} />
      <NavContent>
        <NavSectionVertical data={navConfig} />
      </NavContent>
    </NavContainer>
  );
};

export default NavVertical;