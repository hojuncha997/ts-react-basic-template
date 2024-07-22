import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { PATH_DASHBOARD } from "../routes/paths";
import { useAuthContext } from "./useAuthContext";

type GuestGuardProps = {
  children: ReactNode;
};

/*
GuestGuard의 목적은 인증되지 않은 사용자만 접근할 수 있는 페이지를 보호하고,
이미 인증된 사용자가 접근하려 할 경우 적절히 리다이렉트하는 것이다.

*/
export default function GuestGuard({ children }: GuestGuardProps): JSX.Element {
  const { isAuthenticated, isInitialized } = useAuthContext();

  // 만약 사용자가 인증되어 있으면 대시보드로 리다이렉트
  if (isAuthenticated) {
    return <Navigate to={PATH_DASHBOARD.root} />;
  }

  // 사용자가 인증되지 않은 상태에서 초기화가 완료되지 않았다면 로딩 표시
  if (!isInitialized) {
    return <div>loading...</div>;
  }

  // 인증되지 않은 사용자에게 자식 컴포넌트 표시: 예를 들면 로그인이나 회원등록을 요구하는 페이지
  return <>{children}</>;
}
