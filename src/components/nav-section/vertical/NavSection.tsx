import { NavSectionProps } from "./types";
import NavList from "./NavList";

export default function NavSection({ data }: NavSectionProps) {
  return <NavList />;
}

// return (
//   <div key={key} {...other}>
//     <SubheaderWrapper onClick={() => toggleSection(group.subheader)}>
//       {/* 서브헤더(대메뉴명) 표시 */}
//       {group.subheader}
//       <ToggleIcon>
//         {/* openSections객체의 group.subheader 키에 대응되는 value의 값이 true라면 ▼, false라면 ▶ 표시 */}
//         {openSections[group.subheader] ? "▼" : "▶"}
//       </ToggleIcon>
//     </SubheaderWrapper>

//     {openSections[group.subheader] &&
//       // true이면 소메뉴 객체들을 렌더링한다. list는 소메뉴 객체 하나이다.
//       group.items.map((list: NavListProps) => (
//         <NavList
//           key={list.title + list.path}
//           data={list}
//           depth={1}
//           hasChild={!!list.children}
//           onCloseNav={onCloseNav}
//         />
//       ))}
//   </div>
// );
