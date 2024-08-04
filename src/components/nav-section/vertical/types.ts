import React from 'react';

export type NavItemProps = {
  title: string;
  path: string;
  icon?: React.ReactElement;
  children?: NavItemProps[];
};

export type NavSectionProps = {
  data: NavItemProps[];
};

export type NavListProps = {
  data: NavItemProps;
  depth: number;
  hasChild: boolean;
};

export type NavListRootProps = NavListProps;

export interface StyledNavItemProps {
  active?: boolean;
  open?: boolean;
  subItem?: boolean;
  isOffset?: boolean;
}