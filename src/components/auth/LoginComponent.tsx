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
          <LoginForm></LoginForm>
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
  background-color: #eee;
  border: 1px solid #000;
`;
