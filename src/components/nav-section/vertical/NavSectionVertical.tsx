// type NavSectionVerticalProps = {
//   data: any;
//   items: NavListProps[];

// };

import NavList from './NavList';



// 실제적으로 네비게이션의 메뉴 구조를 생성하는 컴포넌트
import { NavSectionProps } from "./types";
export default function NavSectionVertical({
  data,
  ...other
}: NavSectionProps) {
  return (
    <>
      {data.map((group) => {
        const key = group.subheader || group.items[0].title;

        return (
          <div key={key} {...other}>
            {group.subheader && <div>{group.subheader}</div>}
            {group.items.map((list) => {
              return (<NavList
                key={list.title + list.path}
                data={list}
                depth={1}
                hasChild={!!list.children}
              />
              )
            })}
          </div>
        );
      })}
    </>
  );
}
