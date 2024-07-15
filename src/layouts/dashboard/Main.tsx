import { ReactNode, ReactElement } from "react";
import styled from "styled-components";

type MainProps = {
  children?: ReactNode;
};

export default function Main({ children }: MainProps): ReactElement {
  return <MainContainer>{children}</MainContainer>;
}

const MainContainer = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
`;
