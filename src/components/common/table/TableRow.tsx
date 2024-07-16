import styled from "styled-components";
import { ReactElement, ReactNode } from "react";

type TableRowProps = {
  children?: ReactNode;
};

export default function TableRow({ children }: TableRowProps): ReactElement {
  return <tr>{children}</tr>;
}

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;
  &:last-child {
    border-bottom: none;
  }
`;
