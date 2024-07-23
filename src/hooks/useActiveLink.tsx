import { useLocation, matchPath } from 'react-router-dom';

// ----------------------------------------------------------------------

type ReturnType = {
  active: boolean;
  isExternalLink: boolean;
};

export default function useActiveLink(path: string, deep = true): ReturnType {
  const { pathname } = useLocation();

  // path와 경로의 끝부분(end)이 일치하는지 확인
  const normalActive = path ? !!matchPath({ path, end: true }, pathname) : false;

  const deepActive = path ? !!matchPath({ path, end: false }, pathname) : false;

  return {
    // 하위 메뉴인 경우 deepActive를 반환하고, 아닌 경우 normalActive를 반환
    active: deep ? deepActive : normalActive,
    // path에 'http'가 포함되어 있으면 외부 링크로 판단
    isExternalLink: path.includes('http'),
  };
}
