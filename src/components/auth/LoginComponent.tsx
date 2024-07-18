import styled from "styled-components";

import { ReactNode } from "react";

type LoginComponentProps = {
  children?: ReactNode;
};

export default function LoginComponent({
  children,
}: LoginComponentProps): JSX.Element {
  return (
    <>
      <StyledLoginComponent>
        로그인 컴포넌트
        <LoginFormContainer>sfdsdfffffffffffffff</LoginFormContainer>
      </StyledLoginComponent>
    </>
  );
}

const StyledLoginComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
`;
