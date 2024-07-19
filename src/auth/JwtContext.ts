import {
  createContext,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
  ReactNode,
} from "react";

import localStorageAvailable from "../utils/localStorageAvailable";

// 1. 초기 상태 타입 설정
type AuthState = {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User | null;
};

type User = {
  id: string;
  email: string;
  name: string;
};

// 2. 초기 상태 설정
const initialState: AuthState = {
  /*
  - isInitialized는 초기화 여부를 나타내는 값으로, 초기화가 완료되면 true로 변경
  - isAuthenticated는 인증 여부를 나타내는 값으로, 인증되면 true로 변경
  - user는 현재 로그인한 사용자 정보를 저장하는 값
  */
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

// 3. 액션 타입 설정
type AuthAction =
  | {
      type: "INITIAL";
      payload: { isAuthenticated: boolean; user: User | null };
    }
  | { type: "LOGIN"; payload: { user: User } }
  | { type: "LOGOUT" }
  | { type: "REGISTER"; payload: { user: User } };

// 4. 리듀서 함수 작성
const reducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "INITIAL":
      return {
        // 초기화 액션 처리
        // - isInitialized를 true로 변경
        // - isAuthenticated와 user 값은 액션에서 전달된 값으로 설정
        // - 전달된 값이 없을 경우 기존 값 유지
        // - 초기화 액션은 한 번만 실행되므로, isInitialized 값만 변경
        // - 초기화 이후에는 인증 여부와 사용자 정보는 로그인/로그아웃 액션으로 변경

        ...state,
        isInitialized: true,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };

    case "LOGIN":
      return {
        // 로그인 액션 처리
        // - isAuthenticated를 true로 변경
        // - user 값은 액션에서 전달된 값으로 설정
        // - 로그인 이후에는 인증 여부와 사용자 정보는 로그인/로그아웃 액션으로 변경
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    case "LOGOUT":
      return {
        // 로그아웃 액션 처리
        // - isAuthenticated를 false로 변경
        // - user 값을 null로 설정
        // - 로그아웃 이후에는 인증 여부와 사용자 정보는 로그인/로그아웃 액션으로 변경
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case "REGISTER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

//------------------------------------------------------------------------------------------

// 5. Context 객체 생성
export const AuthContext = createContext(null);

// 6. Context Provider 컴포넌트(AuthProvider) 작성
type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  // 7. useReducer 훅을 사용하여 상태 관리 로직 작성: dispatch 함수를 사용하여 액션을 전달하고 상태를 변경
  const [state, dispatch] = useReducer(reducer, initialState);

  // 8. 로컬스토리지 사용 가능 여부 확인
  const storageAvailable = localStorageAvailable();

    // 9. 초기화 함수 작성
    const initialize = useCallback(async () => {

        try {
            const accessToken = storageAvailable ? localStorage.getItem("accessToken") : "";

            if (accessToken && isValidToken(accessToken)) {

                const user = setSession
            }
        }



    }, []);


  return <></>;
}
