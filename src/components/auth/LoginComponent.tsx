import { ReactNode } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import { useAuthContext } from "../../auth/useAuthContext";

type LoginComponentProps = {
  children?: ReactNode;
};

export default function LoginComponent({
  children,
}: LoginComponentProps): JSX.Element {

  /*
  JwtContext에서 login 함수를 가져와서 사용.
  파라미터가 전달되고, API통신 뒤, 성공하면 그 값은 login함수 내부의 dispatch 함수를 통해 전달함.
  dispatch 함수는 reducer 함수에게 action을 전달하면, reducer 함수는 action의 타입에 따라 state를 변경함.
  memoizedValue(useMemo함수)를 사용하여 이렇게 변경된 state를 하위 컴포넌트에 전달함  
  */
  const {login} = useAuthContext();


  /*
  
  const onSubmit = async (data: FormValuesProps) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      console.error(error);
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message || error,
      });
    }
  };

  */





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
