import { useLocation, matchPath } from "react-router-dom";

// ----------------------------------------------------------------------

type ReturnType = {
  active: boolean;
  isExternalLink: boolean;
};

export default function useActiveLink(path: string, deep = true): ReturnType {
  const { pathname } = useLocation();

  // path와 경로의 끝부분(end)이 일치하는지 확인:  end: true 옵션을 주어 경로의 끝부분까지 정확히 일치하는지 확인
  const normalActive = path
    ? !!matchPath({ path, end: true }, pathname)
    : false;

  // end: false 옵션을 사용하여 경로의 일부만 일치해도 true를 반환
  // 주어진 path가 현재 pathname의 시작 부분과 일치하면 true를 반환하는 것이다. path가 /dashboard/product이고 pathname이 /dashboard/product/1인 경우에도 true를 반환한다.
  // 그러나 path가 /dashboard/product/list이고 pathname이 /dashboard/product인 경우에는 false를 반환한다. path와 pathname이 같은 경우에도 true를 반환한다.
  const deepActive = path ? !!matchPath({ path, end: false }, pathname) : false;

  return {
    // 하위 메뉴인 경우 deepActive를 반환하고, 아닌 경우 normalActive를 반환
    active: deep ? deepActive : normalActive,
    // path에 'http'가 포함되어 있으면 외부 링크로 판단
    isExternalLink: path.includes("http"),
  };
}

/*

deep = true일 때는 현재 URL이 지정된 path로 시작하기만 하면 active가 true가 된다.
반면 deep = false일 때는 현재 URL이 지정된 path와 정확히 일치해야만 active가 true가 된다.

*/
