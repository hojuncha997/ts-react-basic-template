import { ReactElement, ReactNode } from "react";

type TableCellProps = {
  children?: ReactNode;
};

export default function TableCell({ children }: TableCellProps): ReactElement {
  return <td>{children}</td>;
}
