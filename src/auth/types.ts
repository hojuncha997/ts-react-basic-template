// ----------------------------------------------------------------------

/*
ActionMapType은 M이라는 제네릭 타입을 받아서 객체 타입을 반환한다.
M이라는 임의의 타입은 어떤 객체 타입의 서브타입이다. 
이 객체 타입은 인덱스 시그니처를 사용한 타입인데, 인덱스 시그니처는 TypeScript에서 객체의 프로퍼티명과
 값을 정의하는 방법 중 하나이다. 이 타입을 상속한 타입은 맵 형태로 타입을 받을 수 있게 된다. 
 여기에서는 문자열 타입의 프로퍼티명을 받고, 
 모든 타입의 프로퍼티 값을 받을 수 있는 객체를 타입으로 가질 수 있다.

이렇게 받은 객체형 타입인 M에서 프로퍼티명만 뽑아내어 유니언 타입을 반환한 뒤, 
유니언 타입의 각 요소를 Key라는 파라미터로 받아서 반복문을 실행한다. 
반복 작업의 첫 번째 순서는 TypeScript에만 존재하는 조건부 타입 문법을 사용하는 것이다. 
Key를 사용해 M 객체 타입에서 해당 키에 해당하는 값(value)을 뽑아낸다. 
이 값이 undefined 타입을 상속한 서브타입이라면 { type: Key }라는 객체만 반환하고, 
그렇지 않다면 { type: Key; payload: M[Key] } 객체를 반환한다.
*/


export type ActionMapType<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
            type: Key;
        }
        : {
            type: Key;
            payload: M[Key];
        };
};


// Record 타입은 TypeScript에서 제공하는 유틸리티 타입 중 하나이다.
// Record<K, T>는 객체의 프로퍼티 키와 값의 타입을 지정할 수 있다.
// K는 프로퍼티 키의 타입이고, T는 프로퍼티 값의 타입이다.
// 이 타입은 주로 객체를 정의할 때 사용한다.
// 예를 들어 Record<'id' | 'name', string>은 { id: string; name: string }과 같다.
// 따라서 AuthStateType은 유니언 타입으로 null 또는 객체 타입을 가질 수 있다.
  export type AuthUserType = null | Record<string, any>;
  
  export type AuthStateType = {
    isAuthenticated: boolean;
    isInitialized: boolean;
    user: AuthUserType;
  };
  
  // ----------------------------------------------------------------------
  
  // export type JWTContextType = {
  //   method: string;
  //   isAuthenticated: boolean;
  //   isInitialized: boolean;
  //   user: AuthUserType;
  //   //login의 반환값은 Promise<void>이다. 의미는 login 함수가 비동기 함수임을 의미한다. 아무것도 반환하지 않는다.
  //   login: (email: string, password: string) => Promise<void>;
  //   register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  //   logout: () => void;
  //   loginWithGoogle?: () => void;
  //   loginWithGithub?: () => void;
  //   loginWithTwitter?: () => void;
  // };
  export type JWTContextType = {
    method: string;
    isAuthenticated: boolean;
    isInitialized: boolean;
    user: AuthUserType;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
    logout: () => void;
    loginWithGoogle?: () => void;
    loginWithGithub?: () => void;
    loginWithTwitter?: () => void;
  };
  export type FirebaseContextType = {
    method: string;
    isAuthenticated: boolean;
    isInitialized: boolean;
    user: AuthUserType;
    login: (email: string, password: string) => void;
    register: (email: string, password: string, firstName: string, lastName: string) => void;
    logout: () => void;
    loginWithGoogle?: () => void;
    loginWithGithub?: () => void;
    loginWithTwitter?: () => void;
  };
  
  export type AWSCognitoContextType = {
    method: string;
    isAuthenticated: boolean;
    isInitialized: boolean;
    user: AuthUserType;
    login: (email: string, password: string) => void;
    register: (email: string, password: string, firstName: string, lastName: string) => void;
    logout: () => void;
    loginWithGoogle?: () => void;
    loginWithGithub?: () => void;
    loginWithTwitter?: () => void;
  };
  
  export type Auth0ContextType = {
    method: string;
    isAuthenticated: boolean;
    isInitialized: boolean;
    user: AuthUserType;
    // login: () => Promise<void>;
    logout: () => void;
    // To avoid conflicts between types this is just a temporary declaration.
    // Remove below when you choose to authenticate with Auth0.
    login: (email?: string, password?: string) => Promise<void>;
    register?: (
      email: string,
      password: string,
      firstName: string,
      lastName: string
    ) => Promise<void>;
    loginWithGoogle?: () => void;
    loginWithGithub?: () => void;
    loginWithTwitter?: () => void;
  };
  