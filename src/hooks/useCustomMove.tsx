import { useEffect, useState } from "react";

import {
  createSearchParams, // createSearchParams 추가: 쿼리 스트링 생성 함수
  useNavigate,
  useSearchParams,
} from "react-router-dom";

type PageParam = {
  page?: string | number;
  size?: string | number;
};

// const getNum = (param: string | null, defaultValue: number): number => {
//   if (!param) {
//     return defaultValue;
//   }
//   return parseInt(param);
// };

// const getNum = (param: string | null, defaultValue: number): number => {
//   if (param === null) {
//     return defaultValue;
//   }
//   const parsed = parseInt(param, 10);
//   return isNaN(parsed) ? defaultValue : parsed;
// };

const getNum = (
  param: string | number | null | undefined,
  defaultValue: number
): number => {
  if (param === null || param === undefined) {
    return defaultValue;
  }
  const parsed = typeof param === "number" ? param : parseInt(param, 10);
  return isNaN(parsed) ? defaultValue : parsed;
};

const useCustomMove = () => {
  const navigate = useNavigate();

  const [refresh, setRefresh] = useState(false); // 동일한 페이지를 호출할 때 새로고침을 위한 상태 추가

  const [queryParams] = useSearchParams(); // 쿼리 스트링을 가져오는 useSearchParams() 추가

  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);

  const queryDefault = createSearchParams({
    page: page.toString(),
    size: size.toString(),
  }).toString(); // 추가

  //   리스트로 이동
  // const moveToList = (pageParam: PageParam | null, path?: string) => {
  //   let queryStr = "";
  //   if (pageParam) {
  //     const pageNum = getNum(pageParam.page, 1);
  //     const sizeNum = getNum(pageParam.size, 10);

  //     queryStr = createSearchParams({
  //       page: pageNum.toString(),
  //       size: sizeNum.toString(),
  //     }).toString();
  //   } else {
  //     queryStr = queryDefault;
  //   }
  //   setRefresh(!refresh); // 페이지 이동 시 새로고침을 위한 상태 변경
  //   navigate({ pathname: path ? path : `../list`, search: queryStr });
  // };

  const moveToList = (
    pageParam: PageParam | null = null,
    path: string = "../list"
  ) => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, page);
      const sizeNum = getNum(pageParam.size, size);

      queryStr = createSearchParams({
        page: pageNum.toString(),
        size: sizeNum.toString(),
      }).toString();
    } else {
      queryStr = queryDefault;
    }
    setRefresh(!refresh);
    navigate({ pathname: path, search: queryStr });
  };

  // //   개별 목록 수정페이지로 이동
  // const moveToModify = (num: number, path?: string) => {
  //   console.log(queryDefault);

  //   navigate({
  //     pathname: `${path}/${num}` || `../modify/${num}`,
  //     search: queryDefault, // 수정 시 기존 쿼리 스트링 유지 목적
  //   });
  // };

  // // 조회 페이지 이동
  // const moveToRead = (num: number, path?: string) => {
  //   navigate({
  //     pathname: `${path}/${num}` || `../read/${num}`,
  //     search: queryDefault, // 수정 시 기존 쿼리 스트링 유지 목적
  //   });
  // };

  const moveToPage = (
    num: number,
    pathType: "modify" | "read" = "read",
    basePath: string = ".."
  ) => {
    navigate({
      pathname: `${basePath}/${pathType}/${num}`,
      search: queryDefault,
    });
  };

  // return { moveToList, moveToModify, moveToRead, page, size, refresh };

  return {
    moveToList,
    moveToPage,
    moveToModify: (num: number, basePath?: string) =>
      moveToPage(num, "modify", basePath),
    moveToRead: (num: number, basePath?: string) =>
      moveToPage(num, "read", basePath),
    page,
    size,
    refresh,
  };
};

export default useCustomMove;

// /*
// useCustomMove()의 내부에서 useNavigate()와 useSearchParams()를 이용해서
// 원하는 기능을 moveToList()로 만들고 이를 page, size와 함께 반환한다.
// 외부에서 useCustomMove()를 이용하면 간단히 useNavigate()를 이용하게 되고 반환된 데이터들 중에 필요한 데이터만 선별해 사용할 수 있다.
// */

/*

컴포넌트에서 사용 예시

const { moveToList, moveToPage, moveToModify, moveToRead, page, size } = useCustomMove();

// 기본 리스트로 이동
moveToList();

// 특정 페이지 파라미터로 리스트 이동
moveToList({ page: 2, size: 20 });

// 특정 경로의 리스트로 이동
moveToList(null, "/board/notices");

// 수정 페이지로 이동
moveToModify(123);

// 읽기 페이지로 이동
moveToRead(456);

// 커스텀 베이스 경로로 수정 페이지 이동
moveToPage(789, 'modify', '/custom/path');

*/
