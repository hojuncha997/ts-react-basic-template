import { useState, useEffect } from "react";

function useResponsive() {
  // 상태 훅을 사용하여 창의 너비와 높이를 관리
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // 창 크기를 업데이트하는 함수
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 'resize' 이벤트 리스너를 추가
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 'resize' 이벤트 리스너를 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 빈 배열을 두 번째 인수로 전달하여 이 효과가 한 번만 실행되도록 함

  // 현재 창 크기를 반환
  return windowSize;
}

export default useResponsive;
