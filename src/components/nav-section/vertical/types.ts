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

// 메뉴 그 자체
export type NavItem = {
  title: string;
  path: string;
  icon?: ReactNode;
  children?: NavItem[];
  // 외부 링크 여부: true이면 <a>로 렌더링, false이면 <Link>로 렌더링
  isExternalLink?: boolean;
};

// 최상위 메뉴. navConfig의 가장 바깥 원소 객체
export type NavSection = {
  // 최상위 메뉴명
  subheader: string;
  items: NavItem[];
};

// NavConfig는 메뉴 구조를 담은 배열: 최상위 메뉴들로 이루어짐
export type NavConfig = NavSection[];

// NavList는 NavSection에서 item 배열의  순회 결과로 나온 NavItem 객체를 받아 렌더링 또는 NavItem의 item 배열의 순회 결과로 나온 NavItem 객체를 받아 렌더링
export interface NavListProps {
  item: NavItem;
  depth: number;
  onItemClick: (item: NavItem) => void;
}

// NavSectionProps의 역할은 NavSection 객체를 받아 NavList로 렌더링
export interface NavSectionProps {
  section: NavSection;
  onItemClick: (item: NavItem) => void;
}

// NavVerticalProps는 NavConfig를 받아 NavSection으로 렌더링
export interface NavVerticalProps {
  config: NavConfig;
  openNav: boolean;
  onCloseNav: () => void;
}
