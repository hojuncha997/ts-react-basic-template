import React, { useState } from "react";
import NavList from "./NavList";
import { NavSectionProps, NavListProps } from "./types";
import styled from "styled-components";

const SubheaderWrapper = styled.div`
  font-weight: bold;
  margin: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToggleIcon = styled.span`
  font-size: 12px;
`;

// export type NavSectionProps = {
//     data: {
//       subheader: string;
//       items: NavListProps[];
//     }[];
//      onCloseNav: () => void;
//   };

export default function NavSectionVertical({
  data,
  // onCloseNav,
  ...other
}: NavSectionProps) {
  /* 
  메뉴의 펼침/닫힘 상태를 관리하는 state
  초깃값은 빈 객체이며, string 타입의 대메뉴명을 key로 가지고 boolean 타입의 값을 가진다
  */
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    data.reduce((acc, group) => ({ ...acc, [group.subheader]: false }), {})
  );

  // 서브메뉴를 펼치거나 닫는 함수
  const toggleSection = (subheader: string) => {
    // 대메뉴 명을 누르면 해당 대메뉴의 펼침/닫힘 상태를 반전시킨다.
    // 처음 누르는 경우에는 대메뉴명이 객체의 key로 추가되고 true로 설정된다.(undefined가 반전되기 때문)
    // alert(subheader);
    setOpenSections((prev) => ({ ...prev, [subheader]: !prev[subheader] }));
  };

  return (
    <>
      {data.map((group) => {
        const key = group.subheader || group.items[0].title;

        return (
          <div key={key} {...other}>
            {/* <SubheaderWrapper onClick={() => toggleSection(group.subheader)}> */}
            <SubheaderWrapper>
              {/* 서브헤더(대메뉴명) 표시 */}
              {group.subheader}
              <ToggleIcon>
                {/* openSections객체의 group.subheader 키에 대응되는 value의 값이 true라면 ▼, false라면 ▶ 표시 */}
                {/* {openSections[group.subheader] ? "▼" : "▶"} */}
              </ToggleIcon>
            </SubheaderWrapper>

            {group.items.map((list: NavListProps) => (
              <NavList
                key={list.title + list.path}
                data={list}
                depth={1}
                hasChild={!!list.children}
                // onCloseNav={onCloseNav}
                // toggleSection={toggleSection}
              />
            ))}

            {/* 
            대메뉴에서 바로 접어지는 경우에는 아래와 같이 렌더링한다. 
            <SubheaderWrapper>도 <SubheaderWrapper onClick={() => toggleSection(group.subheader)}>도 적용 필요
            
            {openSections[group.subheader] &&
              // true이면 소메뉴 객체들을 렌더링한다. list는 소메뉴 객체 하나이다.
              group.items.map((list: NavListProps) => (
                <NavList
                  key={list.title + list.path}
                  data={list}
                  depth={1}
                  hasChild={!!list.children}
                  onCloseNav={onCloseNav}
                  // toggleSection={toggleSection}
                />
              ))} */}
          </div>
        );
      })}
    </>
  );
}
