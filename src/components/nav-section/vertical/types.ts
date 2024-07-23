// import { StackProps, ListItemButtonProps } from '@mui/material';

// ----------------------------------------------------------------------

// 대메뉴
export type INavItem = {
  item: NavListProps;
  depth: number;
  open?: boolean;
  active?: boolean;
  isExternalLink?: boolean;
};

// export type NavItemProps = INavItem & ListItemButtonProps;

// 소메뉴
export type NavListProps = {
  title: string;
  path: string;
  icon?: React.ReactElement;
  info?: React.ReactElement;
  caption?: string;
  disabled?: boolean;
  roles?: string[];
  children?: any;
};

// export interface NavSectionProps extends StackProps {
export type NavSectionProps = {
  data: {
    subheader: string;
    items: NavListProps[];
  }[];
};
