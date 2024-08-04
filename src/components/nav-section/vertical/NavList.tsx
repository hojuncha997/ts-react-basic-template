
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';

import useActiveLink from "../../../hooks/useActiveLink";
import { NavListProps, NavListRootProps } from "./types";
import NavItem from "./NavItem";






const CollapseContainer = styled.div<{ open: boolean }>`
  max-height: ${props => props.open ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
}


const NavList: React.FC<NavListProps> = ({ data, depth, hasChild }) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(pathname.includes(data.path));
  }, [pathname, data.path]);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <NavItem
        item={data}
        depth={depth}
        open={open}
        onClick={handleToggle}
      />
      {hasChild && (
        <CollapseContainer open={open}>
          {data.children?.map((list) => (
            <NavList
              key={list.title + list.path}
              data={list}
              depth={depth + 1}
              hasChild={!!list.children}
            />
          ))}
        </CollapseContainer>
      )}
    </>
  );
};

export default NavList;