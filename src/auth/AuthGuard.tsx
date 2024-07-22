import { useState, ReactNode } from "react";
import { useAuthContext } from "./useAuthContext";
import { useLocation, Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";

type AuthGuardProps = {
  children: ReactNode;
};

/*
AuthGuard는 인증된 사용자만 접근할 수 있는 페이지를 보호하고, 
인증되지 않은 사용자가 접근하려 할 경우 로그인 페이지로 리다이렉트하며, 
로그인 후에는 원래 접근하려던 페이지로 되돌아갈 수 있도록 하는 것이다
*/
export default function AuthGuard({ children }: AuthGuardProps): JSX.Element {
  const { isAuthenticated, isInitialized } = useAuthContext();

  // 현재 경로를 가져오기 위해 useLocation 훅 사용
  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );

  if (!isInitialized) {
    return <div>loading...</div>;
  }

  /*
  사용자가 인증되지 않은 상태에서 접근한 경로를 저장하고 로그인 페이지로 리다이렉트

  사용자가 인증되어 있지 않으면 로그인 페이지로 리다이렉트한다.
  그런데 만약 사용자가 인증되어 있지 않은 상태에서 요청한 경로가 있다면,
  해당 경로를 기억하도록 상태에 저장하고 로그인 페이지로 리다이렉트한다.
  */
  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <LoginPage />;
  }

  /*
  사용자가 인증된 후에도 요청했던 경로가 존재하면 해당 경로로 리다이렉트(이미 인증이 된 경우이다!)

  기존에 저장해 놓은 요청경로가 존재하고, 현재 요청한 경로가 그 값과 다르다면
  기존에 저장한 요청 경로로 리다이렉트한다. 그리고 저장된 요청 경로는 초기화한다.
  리다이렉트 로직이 초기화 로직보다 나중이지만, 상태 업데이트는 비동기적으로 처리되므로 리다이렉트가 먼저 실행된다.

  참고: setRequestedLocation() 세터 함수 자체는 동기적으로 실행된다. 반환값이 없기 때문에 파라미터만 동기적으로 전달하고
  즉시 해제되어버린다. 그러나 파라미터로 넘긴 값을 가지고 상태를 업데이트 하는 작업은 비동기적으로 처리되기 때문에
  일반적으로 리액트에서의 상태 업데이트를 비동기적으로 처리한다고 말하는 것이다.
   */
  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  // 인증과 초기화가 완료된 경우에는 자식 컴포넌트를 표시한다.
  return <>{children}</>;
}
