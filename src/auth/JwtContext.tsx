import {
  createContext,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
  ReactNode,
} from "react";

import localStorageAvailable from "../utils/localStorageAvailable";
import { isValidToken, setSession, setRefreshtoken } from "./utils";
import {
  ActionMapType,
  AuthStateType,
  AuthUserType,
  JWTContextType,
} from "./types";

import { axios, loginFormAxios } from "../utils/axios";

// yarn add jsonwebtoken
// yarn add @types/jsonwebtoken
// import jwt from "jsonwebtoken";

enum Types {
  INITIAL = "INITIAL",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  LOGOUT = "LOGOUT",
}

// Types 타입에서 Value를 가져오기 위해 대괄호에 키를 넣는다. 그렇게 가져온 문자열은 Payload의 키로 사용된다.
type Payload = {
  [Types.INITIAL]: {
    isAuthenticated: boolean;
    user: AuthUserType;
  };
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  [Types.REGISTER]: {
    user: AuthUserType;
  };
  [Types.LOGOUT]: undefined;
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

/*
ActionMapType<Payload>: Payload 타입을 받아 새로운 객체 타입을 생성
keyof ActionMapType<Payload>: 생성된 객체 타입의 키들을 유니언 타입으로 반환
ActionMapType<Payload>[keyof ActionMapType<Payload>]: 생성된 객체 타입에서 각 키에 해당하는 값을 유니언 타입으로 반환
결과적으로 ActionsType은 모든 가능한 액션 타입들을 포함하는 유니언 타입이 됨
이를 통해 ActionsType은 Payload에 정의된 모든 액션 타입을 포괄하는 타입으로 정의
*/

// ----------------------------------------------------------------------

const initialState: AuthStateType = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

// useReducer 훅에 파라미터로 전달할 reducer 함수이다.
// dispatch 함수가 reducer 함수에게 action을 전달하면, reducer 함수는 action의 타입에 따라 state를 변경한다.
// reducer 함수는 state와 action을 받아서 새로운 state를 반환한다.
const reducer = (state: AuthStateType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }
  if (action.type === Types.REGISTER) {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

// 전역에서 사용할 수 있는 데이터를 제공하는 컴포넌트를 만들기 위해 createContext 함수를 사용
// createContext 함수는 Context 객체를 반환하며, 이 객체는 Provider와 Consumer를 가진다.
// Provider는 Context 객체를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할을 한다.
// Consumer는 context를 구독하는 컴포넌트이다. 즉, 해당 데이터를 사용하는 컴포넌트이다.

export const AuthContext = createContext<JWTContextType | null>(null);

// ----------------------------------------------------------------------

type AuthProviderProps = {
  children: React.ReactNode;
};

// 추후 이 AuthProvider가 App.tsx의 리턴 값을 전부 감싸는 역할을 한다.
// 이 컴포넌트가 반환하는 것은 AuthContext.Provider이며, 이 컴포넌트는 value prop을 통해 값을 전달한다.

export function AuthProvider({ children }: AuthProviderProps) {
  // useReducer에서 반환하는 dispatch 함수가 reducer 함수를 호출해서 state를 변경한다.
  // 이 때 dispatch는 파라미터로 action을 받는다. 이 action은 다시 reducer 함수의 두 번째 인자로 전달된다.
  const [state, dispatch] = useReducer(reducer, initialState); //false false null

  const storageAvailable = localStorageAvailable();

  // 페이지를 새로고침 하거나 브라우저를 닫았다가 다시 열었을 때, 초기화를 위한 함수
  const initialize = useCallback(async () => {
    try {
      // 로컬 스토리지가 사용 가능하다면 accessToken을 가져온다.
      const accessToken = storageAvailable
        ? localStorage.getItem("accessToken")
        : "";

      if (accessToken && isValidToken(accessToken)) {
        // 토큰이 존재한다면 세션을 설정한다(로컬 스토리지에 토큰을 저장하고, 타이머를 맞춤)
        setSession(accessToken);

        // API 요청을 통해 사용자 정보를 가져온다.(이미 보유하고 있는 토큰을 사용)
        // const response = await axios.get("/api/account/my-account"); 새로고침 시 사용되나 해당 api엎으므로 주석처리
        // const { user } = response.data;

        // 테스트용 사용자 정보
        const user = {
          id: 1,
          email: "user1@aaa.com",
          password: "1111",
        };

        // 토큰이 유효하다면 사용자 정보를 가져와서 state를 업데이트한다.
        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: true,
            user,
          },
        });
      } else {
        // 토큰이 유효하지 않다면 초기화한다.
        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (error) {
      // 에러가 발생하면 초기화한다.
      console.error(error);
      dispatch({
        type: Types.INITIAL,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, [storageAvailable]);

  // 이 useEffect는 AuthProvider 컴포넌트가 마운트될 때, 그리고 initialize 함수가 변경될 때마다 실행된다
  // 새로고침이나 브라우저를 닫았다가 다시 열었을 때, 전체 앱이 초기화 된다 이 때 initialize 함수가 실행된다.
  // AuthProvider가 App.tsx의 컴포넌트들을 가장 바깥에서 감싸고 있으므로 내부의 컴포넌트들이 초기화 되기 전에 먼저 초기화된다.
  useEffect(() => {
    initialize();
  }, [initialize]);

  // 아래 함수들은 useContext를 사용하여 컨슈머 컴포넌트에서 사용할 수 있도록 제공된다.
  // const { login, register, logout } = useContext(AuthContext);

  // LOGIN
  const login = useCallback(async (email: string, password: string) => {
    console.log("login email: " + email + " password: " + password);

    /*
    테스트 하는 동안 주석처리
    const response = await axios.post("/api/account/login", {
      email,
      password,
    });
    const { accessToken, user } = response.data;

    */

    // 토큰을 만들어주는 API 서버가 있는 경우 사용
    const form = new FormData();
    form.append("username", email);
    form.append("password", password);

    const response = await loginFormAxios.post("/api/member/login", form);
    // alert(JSON.stringify(response));
    const { accessToken, user, refreshToken } = response.data;
    // alert("accessToken: " + accessToken);
    // alert("refreshToken: " + refreshToken);

    /*
      서버에 다녀오지 않아도 클라이언트에서 테스트 할 수 있도록 jsonwebtoken 라이브러리를 사용하여 토큰을 생성
      로그인 시 아무 계정 정보를 넣어도 같은 정보를 담은 토큰이 생성된다.
      
      yarn add jsonwebtoken
      yarn add @types/jsonwebtoken

    */
    // 현재 시간 기준으로 만료 시간 설정 (예: 1시간 후)
    // const currentTime = Math.floor(Date.now() / 1000); // 현재 시간 (초 단위)
    // const expirationTime = currentTime + 60 * 60; // 1시간 후 (초 단위)

    // // JWT 생성
    // const payload = {
    //   id: 1,
    //   email,
    //   nickname: "USER1",
    //   roleNames: ["USER"],
    //   exp: expirationTime, // 만료 시간 설정
    // };
    // const secretKey = "your-very-secure-secret-key"; // 테스트용 비밀 키
    // const accessToken = jwt.sign(payload, secretKey);

    // // 테스트용 사용자 정보
    // const user = {
    //   id: 1,
    //   email: "hojun.cha997@gmail.com",
    // };

    setSession(accessToken);
    setRefreshtoken(refreshToken);

    dispatch({
      type: Types.LOGIN,
      payload: {
        user,
      },
    });
  }, []);

  // REGISTER
  const register = useCallback(
    async (
      email: string,
      password: string,
      firstName: string,
      lastName: string
    ) => {
      const response = await axios.post("/api/account/register", {
        email,
        password,
        firstName,
        lastName,
      });
      const { accessToken, user } = response.data;

      localStorage.setItem("accessToken", accessToken);

      dispatch({
        type: Types.REGISTER,
        payload: {
          user,
        },
      });
    },
    []
  );

  // LOGOUT
  const logout = useCallback(() => {
    setSession(null);
    dispatch({
      type: Types.LOGOUT,
    });
  }, []);

  /*
    실제로 자식컴포넌트들이 사용할 값을 보유하고 있는, 자식들이게 전달되는 값
   */

  const memoizedValue = useMemo(
    () => ({
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      method: "jwt",
      login,
      loginWithGoogle: () => {},
      loginWithGithub: () => {},
      loginWithTwitter: () => {},
      register,
      logout,
    }),
    [
      state.isAuthenticated,
      state.isInitialized,
      state.user,
      login,
      logout,
      register,
    ]
  );

  /*
    컨텍스트 값 저장:
    - AuthContext를 통해 자식 컴포넌트들에게 전달될 모든 값과 함수들을 포함
    
    자식 컴포넌트 접근:
    -AuthContext.Provider의 value prop으로 사용되어, 이 컨텍스트를 사용하는 모든 자식 컴포넌트에서 접근 가능

    데이터 및 기능 제공:
    - 인증 상태 (isInitialized, isAuthenticated)
    - 사용자 정보 (user)
    - 인증 관련 함수 (login, register, logout)
    - 기타 설정 (method: 'jwt')

    성능 최적화:
    - useMemo를 사용하여 불필요한 재생성을 방지
    - 의존성 배열의 값이 변경될 때만 새로운 객체를 생성

    일관성 유지:
    - 모든 자식 컴포넌트가 동일한 인증 컨텍스트에 접근할 수 있게 함

    사용 예시:
    - 자식 컴포넌트에서는 다음과 같이 사용할 수 있음:
    - { isAuthenticated, user, login, logout } = useContext(AuthContext);

    이 구조는 인증 관련 로직과 상태를 중앙에서 관리하면서, 필요한 컴포넌트에서 쉽게 접근할 수 있게 해줌
  */

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}

/*

용례:

로그인 기능을 사용하는 컨슈머 컴포넌트에서 login 함수를 임포트한다.
email, password 값이 파라미터로 로그인함수에 전달된다.
로그인 함수는 axios를 사용하여 서버로 요청을 보내고, 응답을 받는다.
응답에는 accessToken과 user 정보가 포함되어 있다.
응답을 통해 받은 accessToken을 로컬 스토리지에 저장한다.(setSession(accessToken))

이후, dispatch 함수를 사용하여 useReducer훅의 reducer함수에게 type과 payload를 전달한다.
이 때, type은 Types.LOGIN이고, payload는 user 정보를 전달한다.

reducer함수는 type과 payload를 받아서 새로운 상태값으로 지정될 객체를 반환한다.
useReducer훅은 이 반환된 객체를 사용하여 state를 업데이트한다.

상태 값이 업데이트 됨에 따라 AuthProvider에서 useMemo를 사용하여 관리하는 값들이 변경되고,
React는 변경을 감지하여 AuthProvider는 물론 이 값(컨텍스트)를 사용하는 모든 자식 컴포넌트를 재렌더링한다.


*/
