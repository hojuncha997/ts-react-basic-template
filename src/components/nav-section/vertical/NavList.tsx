import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useActiveLink from "../../../hooks/useActiveLink";
import { NavListProps, NavListRootProps } from "./types";
import NavItem from "./NavItem";
import Collapse from "../../common/Collapse";

export default function NavList({
  data,
  depth,
  hasChild,
  onCloseNav,
}: NavListRootProps) {
  const { pathname } = useLocation();
  const { active, isExternalLink } = useActiveLink(data.path);
  const [open, setOpen] = useState(active);

  // 특정 메뉴가 클릭되었을 때 다른 메뉴는 닫히게 하기 위해
  useEffect(() => {
    if (!active) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // const handleToggle = () => {
  //   if (hasChild) {
  //     // 하위 메뉴가 있는 경우, 메뉴를 토글
  //     setOpen(!open);
  //   } else {
  //     // 하위 메뉴가 없는 경우 (최종 메뉴 항목), 네비게이션 바를 닫는다
  //     onCloseNav();
  //   }

  const handleToggle = () => {
    setOpen(!open);
  };


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavItem
        item={data}
        depth={depth}
        open={open}
        active={active}
        isExternalLink={isExternalLink}
        onClick={handleToggle}
      />

      {hasChild && (
        <Collapse in={open}>
          <NavSubList
            data={data.children ?? []}
            depth={depth}
            onCloseNav={onCloseNav}
          />
        </Collapse>
      )}
    </>
  );
}

type NavListSubProps = {
  data: NavListProps[];
  depth: number;
  onCloseNav: () => void;
};

function NavSubList({ data, depth, onCloseNav }: NavListSubProps) {
  return (
    <>
      {data.map((list) => (
        <NavList
          key={list.title + list.path}
          data={list}
          depth={depth + 1}
          hasChild={!!list.children}
          onCloseNav={onCloseNav}
        />
      ))}
    </>
  );
}
