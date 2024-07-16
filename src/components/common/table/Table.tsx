import styled from "styled-components";
import { ReactNode, ReactElement } from "react";

type TableProps = {
  children?: ReactNode;
};

export default function Table({ children }: TableProps): ReactElement {
  return <StyledTable>{children}</StyledTable>;
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  border: 1px solid black;
`;
