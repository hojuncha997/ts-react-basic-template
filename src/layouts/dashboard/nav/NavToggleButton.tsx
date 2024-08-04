import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useResponsive from '../../../hooks/useResponsive';

// 이 값은 프로젝트의 설정에 따라 조정하세요
const DESKTOP_WIDTH = 1024;
const NAV_WIDTH = 280;



export interface NavToggleButtonProps {
    onClick: () => void;
    isNavOpen: boolean;
  }
  

const StyledButton = styled.button<{ isNavOpen: boolean }>`
  position: fixed;
  top: 32px;
  left: ${props => props.isNavOpen ? `${NAV_WIDTH - 12}px` : '12px'};
  z-index: 1100;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px dashed ${props => props.theme.colors?.divider || '#e0e0e0'};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors?.background || '#ffffff'};
  }
`;

const ArrowIcon = styled.span<{ isNavOpen: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  transform: ${props => props.isNavOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.3s;

  &::before {
    content: '→';
  }
`;

const NavToggleButton: React.FC<NavToggleButtonProps> = ({ onClick, isNavOpen }) => {
    const { width } = useResponsive();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(width >= DESKTOP_WIDTH);
  }, [width]);

  if (!isVisible) {
    return null;
  }

  return (
    <StyledButton onClick={onClick} isNavOpen={isNavOpen}>
      <ArrowIcon isNavOpen={isNavOpen} />
    </StyledButton>
  );
}

export default NavToggleButton;






