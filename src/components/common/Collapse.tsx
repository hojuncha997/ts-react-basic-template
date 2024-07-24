import React, { useState, useEffect } from "react";

type CollapseProps = {
  in: boolean;
  children: React.ReactNode;
  unmountOnExit?: boolean;
};

const Collapse: React.FC<CollapseProps> = ({
  in: inProp,
  children,
  unmountOnExit = false,
}) => {
  const [display, setDisplay] = useState(inProp ? "block" : "none");

  useEffect(() => {
    if (inProp) {
      setDisplay("block");
    } else if (unmountOnExit) {
      setTimeout(() => setDisplay("none"), 300); // 300ms는 애니메이션 시간
    }
  }, [inProp, unmountOnExit]);

  return (
    <div
      style={{
        display: display,
        overflow: "hidden",
        transition: "height 300ms ease-in-out",
        height: inProp ? "auto" : 0,
      }}
    >
      {children}
    </div>
  );
};

export default Collapse;
