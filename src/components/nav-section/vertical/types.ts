// // import { StackProps, ListItemButtonProps } from '@mui/material';

// // ----------------------------------------------------------------------

// // 대메뉴
// export type INavItem = {
//   item: NavListProps;
//   depth: number;
//   open?: boolean;
//   active?: boolean;
//   isExternalLink?: boolean;
// };

// // export type NavItemProps = INavItem & ListItemButtonProps;

// export type NavItemProps = {
//   item: {
//     title: string;
//     path: string;
//     icon?: React.ReactNode;
//     info?: React.ReactNode;
//     children?: React.ReactNode;
//     disabled?: boolean;
//     caption?: string;
//     roles?: string[];
//   };
//   depth: number;
//   open: boolean;
//   active: boolean;
//   isExternalLink: boolean;
//   [key: string]: any; // for other props
// };

// // 소메뉴
// export type NavListProps = {
//   title: string;
//   path: string;
//   icon?: React.ReactElement;
//   info?: React.ReactElement;
//   caption?: string;
//   disabled?: boolean;
//   roles?: string[];
//   // children?: any;
//   children?: NavListProps[];
// };

// // export interface NavSectionProps extends StackProps {
// export type NavSectionProps = {
//   data: {
//     subheader: string;
//     items: NavListProps[];
//   }[];
// };

import { ReactNode } from "react";

export type NavListRootProps = {
  data: NavListProps;
  depth: number;
  hasChild: boolean;
  onCloseNav: () => void;
};

// 소메뉴
export type NavListProps = {
  title: string;
  path: string;
  icon?: ReactNode;
  info?: ReactNode;
  caption?: string;
  disabled?: boolean;
  roles?: string[];
  children?: NavListProps[];
};

// 대메뉴
export type NavItemProps = {
  item: NavListProps;
  depth: number;
  open: boolean;
  active: boolean;
  isExternalLink: boolean;
  onClick: () => void;
};

export type NavSectionProps = {
  data: {
    subheader: string;
    items: NavListProps[];
  }[];

  onCloseNav: () => void;
};
