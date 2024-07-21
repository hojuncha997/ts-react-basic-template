import { useContext } from 'react';
//
import { AuthContext } from './JwtContext';
// import { AuthContext } from './Auth0Context';
// import { AuthContext } from './FirebaseContext';
// import { AuthContext } from './AwsCognitoContext';

// ----------------------------------------------------------------------
export function useAuthContext() {
  const context =  useContext(AuthContext);

  if (!context) throw new Error('useAuthContext context must be use inside AuthProvider');

  return context;
}
// 여러 가지 컨텍스트를 사용하려는 목적에서 useAuthContext 함수 생성