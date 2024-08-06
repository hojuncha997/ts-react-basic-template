// import React, { useState, useEffect } from "react";

// type CollapseProps = {
//   in: boolean;
//   children: React.ReactNode;
//   unmountOnExit?: boolean;
// };

// const Collapse: React.FC<CollapseProps> = ({
//   in: inProp,
//   children,
//   unmountOnExit = false,
// }) => {
//   const [display, setDisplay] = useState(inProp ? "block" : "none");

//   useEffect(() => {
//     // alert("inProp: " + inProp + ", unmountOnExit: " + unmountOnExit);

//     if (inProp) {
//       setDisplay("block");
//     } else if (unmountOnExit) {
//       setTimeout(() => setDisplay("none"), 300); // 300ms는 애니메이션 시간
//     }
//   }, [inProp, unmountOnExit]);

//   return (
//     <div
//       style={{
//         display: display,
//         overflow: "hidden",
//         transition: "height 300ms ease-in-out",
//         height: inProp ? "auto" : 0,
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export default Collapse;

import React, { useState, useEffect, useRef, ReactNode } from "react";
import styled from "styled-components";

interface CollapseWrapperProps {
  height: number;
}

const CollapseWrapper = styled.div<CollapseWrapperProps>`
  height: ${({ height }) => `${height}px`};
  overflow: hidden;
  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

interface CollapseProps {
  children: ReactNode;
  in: boolean;
}

const Collapse: React.FC<CollapseProps> = ({ children, in: isOpen }) => {
  const [height, setHeight] = useState<number>(0);

  // useRef를 사용하여 내용을 담은 div에 대한 참조를 생성
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(isOpen ? contentHeight : 0);
    }
  }, [isOpen, children]);

  return (
    <CollapseWrapper height={height}>
      <div ref={contentRef}>{children}</div>
    </CollapseWrapper>
  );
};

export default Collapse;
