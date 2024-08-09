import { ReactNode } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";

type LoginComponentProps = {
  children?: ReactNode;
};

export default function LoginComponent({
  children,
}: LoginComponentProps): JSX.Element {
  return (
    <>
      <StyledLoginComponent>
        <LoginFormContainer>
        <LogoImage src="/images/logo_Orange.svg" alt="Zahive" />

          <LoginForm></LoginForm>
          <StyledSpan>간편 로그인</StyledSpan>
        </LoginFormContainer>
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
  //   height: 100vh;
  min-width: min(90%, 30em);
  min-height: 300px;
  background-color: #fff;
  border: 1px solid #e3e3e3;
  border-radius: 0.5em;
`;

const LogoImage = styled.img`
  padding: 1em;
  width: 100%;
  max-width: 150px;
  height: auto;
`;

const StyledSpan = styled.span`
  color: #e3e3e3;
  margin-top: 1em;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  width: 100%;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #e3e3e3;
  }

  &::before {
    margin-right: 10px;
    margin-left: 1.5em;
  }

  &::after {
    margin-right: 1.5em;
    margin-left: 10px;
  }
`;