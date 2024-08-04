
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import NavList from "./NavList";
import { NavSectionProps, NavListProps } from "./types";
import styled from "styled-components";
// import NavSection from "./NavSection";





const SectionContainer = styled.div`
  margin-bottom: 24px;
`;

const Subheader = styled.h3`
  font-size: 14px;
  color: #757575;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
}

interface NavGroup {
  subheader: string;
  items: NavItem[];
}

interface NavSectionVerticalProps {
  data: NavGroup[];
}

const NavSectionVertical: React.FC<NavSectionVerticalProps> = ({ data }) => {
  return (
    <>
      {data.map((group) => (
        <SectionContainer key={group.subheader || group.items[0].title}>
          {group.subheader && <Subheader>{group.subheader}</Subheader>}
          {group.items.map((list) => (
            <NavList
              key={list.title + list.path}
              data={list}
              depth={1}
              hasChild={!!list.children}
            />
          ))}
        </SectionContainer>
      ))}
    </>
  );
};

export default NavSectionVertical;