import { ReactNode, ReactElement } from "react";

type TableHeaderCellProps = {
  children?: ReactNode;
};

export default function TableHeaderCell({
  children,
}: TableHeaderCellProps): ReactElement {
  return <th>{children}</th>;
}
