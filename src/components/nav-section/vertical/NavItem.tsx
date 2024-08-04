
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const ItemContainer = styled.div<{ depth: number; active: boolean }>`
  padding: 8px 12px;
  margin-left: ${props => props.depth > 1 ? `${props.depth * 20}px` : '0'};
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${props => props.active ? '#1976d2' : '#333'};
  background-color: ${props => props.active ? 'rgba(25, 118, 210, 0.08)' : 'transparent'};
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const ItemTitle = styled.span`
  margin-left: 12px;
`;

interface NavItemProps {
  item: {
    title: string;
    path: string;
    icon?: React.ReactNode;
    children?: any[];
  };
  depth: number;
  open: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ item, depth, open, onClick }) => {
  const { title, path, icon } = item;

  const content = (
    <ItemContainer depth={depth} active={open} onClick={onClick}>
      {icon && <span>{icon}</span>}
      <ItemTitle>{title}</ItemTitle>
      {item.children && (
        <span style={{ marginLeft: 'auto' }}>
          {open ? '▼' : '▶'}
        </span>
      )}
    </ItemContainer>
  );

  return item.children ? (
    content
  ) : (
    <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
      {content}
    </Link>
  );
};

export default NavItem;