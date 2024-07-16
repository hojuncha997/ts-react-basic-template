import { ReactNode, ReactElement } from "react";

type BeltTableRow = {
  children?: ReactNode;
};

export default function BeltTableRow({ children }: BeltTableRow): ReactNode {
  return <tr>{children}</tr>;
}
