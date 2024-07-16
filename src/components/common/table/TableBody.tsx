import { ReactNode, ReactElement } from "react";

type TableBodyProps = {
  children?: ReactNode;
};

export default function TableBody({ children }: TableBodyProps): ReactElement {
  return <tbody>{children}</tbody>;
}
