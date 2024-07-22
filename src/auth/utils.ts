import { clear } from "console";
import exp from "constants";
import { PATH_AUTH } from "../routes/paths";
import { axios } from "../utils/axios";

function jwtDecode(token: string) {
  // 함수 선언: jwtDecode라는 이름의 함수를 선언하며, 매개변수 token의 타입은 string이다.
  const base64Url = token.split(".")[1];
  // JWT 분할: 토큰을 '.'을 기준으로 분할하고, 두 번째 부분(페이로드)을 base64Url 변수에 저장한다.
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  // URL-safe Base64 디코딩 준비: '-'를 '+'로, '_'를 '/'로 대체하여 일반 Base64 형식으로 변환한다.
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join("")
  );
  // Base64 디코딩 및 URI 디코딩:
  // 1. window.atob(base64): Base64 형식의 문자열을 디코딩하여 원래의 문자열로 변환한다.
  // 2. 문자열을 개별 문자로 분할하여 각 문자를 URI 인코딩 형식('%xx')으로 변환한다.
  // 3. 각 문자를 16진수로 변환하여 URI 인코딩 형식으로 만들고 다시 문자열로 결합한다.
  // 4. decodeURIComponent는 URI 인코딩된 문자열을 원래의 문자열로 디코딩한다.
  return JSON.parse(jsonPayload);
  // JSON 파싱: 디코딩된 JSON 문자열을 JavaScript 객체로 변환하여 반환한다.
}

// ----------------------------------------------------------------------

export const isValidToken = (accessToken: string): boolean => {
  // 1. accessToken이 없는 경우, 유효하지 않은 토큰으로 판단
  if (!accessToken) {
    return false;
  }

  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  // 2. 토큰의 만료 시간이 현재 시간보다 이전인 경우, 유효하지 않은 토큰으로 판단
  return decoded.exp > currentTime;
};

// ----------------------------------------------------------------------

export const tokenExpired = (exp: number) => {
  let expiredTimer;

  const currentTime = Date.now();
  alert("currentTime: " + currentTime);
  const timeLeft = exp * 1000 - currentTime;

  alert("timeLeft: " + timeLeft);
  // 만료 타이머가 이미 설정되어 있는 경우, 이전 타이머를 제거한다.
  clearTimeout(expiredTimer);

  // 토큰 만료 시간까지 남은 시간을 계산하여, 만료 시간에 맞춰 타이머를 설정한다.
  // 이 타이머는 배후에서 실행되며, 토큰이 만료되면 경고창을 띄우고 로그인 페이지로 이동한다.
  expiredTimer = setTimeout(() => {
    alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
    localStorage.removeItem("accessToken");
    window.location.href = PATH_AUTH.login;
  }, timeLeft);
};

// export const tokenExpired = (exp: number) => {
//   // eslint-disable-next-line prefer-const
//   let expiredTimer;

//   const currentTime = Date.now();

//   // Test token expires after 10s
//   // const timeLeft = currentTime + 10000 - currentTime; // ~10s
//   const timeLeft = exp * 1000 - currentTime;

//   clearTimeout(expiredTimer);

//   expiredTimer = setTimeout(() => {
//     alert("Token expired");

//     localStorage.removeItem("accessToken");

//     window.location.href = PATH_AUTH.login;
//   }, timeLeft);
// };

// ----------------------------------------------------------------------

export const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    const decodedToken = jwtDecode(accessToken);
    const { exp } = decodedToken;

    // 토큰 만료 시간까지 남은 시간을 계산하여, 만료 시간에 맞춰 타이머를 설정한다.
    tokenExpired(exp);
    return decodedToken;
  }
  // 토큰이 없는 경우, null을 반환한다.
  localStorage.removeItem("accessToken");
  delete axios.defaults.headers.Authorization;
  return null;
};
