헤더와 본문과 네비게이션 바가 있는 곳이 대시보드 레이아웃이다.

대시보드 레이아웃에서 네비게이션을 여닫는 상태를 만들어준다.

const [openNav, setOpenNav] = useState<boolean>(false);

그리고 이 상태를 핸들러로 감싸준다.

const handleOpen = () => {
	setOpenNav(true);
}

const handleclose = () => {
	setOpenNav(false);
}

이다.

<NavVertical>은 네비게이션바를 감싸고 있는 컨테이너이다.
여기에 openNav 상태값과 handleClose를 넘긴다.
<NavVertical openNav={openNav} onCloseNav={handleClose} />
백드롭(까만 배경)을 클릭하거나 메뉴를 클릭했을 때 네비게이션바를 닫기 위해서다.



<Header>에는 openNav={handleOpen}을 넘긴다. 헤더에 붙은 햄버거 버튼을 눌러 열기 위해서다. 


--------------


NavVertical의 내부로 들어가 보자.

NavContainer는 스타일드 컴포넌트로 선언한

NavContainer와 Backdrop을 반환한다.
NavContainer는 실제적인 메뉴를 표시하는 NavSectionVertical을 감싸기 위함이다.


NavVertical의 내부에 선언된 값은

  const { pathname } = useLocation();
  const { width } = useResponsive();

이다.

openNav 값은 NavContainer에게 전달된다.

<NavContainer openNav={openNav}>{renderContent}</NavContainer>
NavContainer는 boolean값인 openNav를 받아서, 이 값이 true이면
left: "0", 아니면 "-너비" 만큼 위치를 조정한다.


Backdrop의 경우에는 width가 768px 아래가 될 때만 렌더링 된다.
단, Backdrop은 prop으로 openNav를 받는데, openNav가 true이면
display:"block", false인 경우는 display:"none"이 된다.


이 NavContainer와 Backdrop은 네비게이션 표시 여부를 담당하는 것일 뿐,
메뉴 자체와는 관련이 없다.
메뉴를 반환하는 것은 NavContainer로 감싼 NavSectionVertical이다.

<NavSectionVertical>은 메뉴구조가 들어있는 객체인 navConfig를 prop으로 받는다.

      <NavSectionVertical data={navConfig} />

--------------


NavSectionVertical은 navConfig 배열을 받는다.
navConfig는 대메뉴 객체가 원소로 있는 배열이다.

이 배열을 map함수로 순회시키며 대메뉴명을 표시한다.
그리고 이 대메뉴명을 클릭하면 대메뉴 객체에 속한 소메뉴 배열(items)을 화면에 표시한다.


이 과정은 이러하다.
먼저 NavSectionVertical은 openSections를 객체의 상태로 가지고 있는다.
const [openSections, setOpenSections] = useState<{[key: string]: boolean}>(
	data.reduce((acc, group) => ({...acc, [group.subheader]: false }) , {})
)

이렇게 하면 모든 대메뉴명:false로 된 객체가 생성된다. 이것이 상태가 된다.
{"로그인":false,"PRODUCT":false,"BELT":false}

따라서 처음 렌더링하면 전부 닫혀있는 상태이다.
만약 이 상태에서 특정 대메뉴명을 클릭하면

toggleSection 함수가 실행되면서 openSection에서 해당 대메뉴의 값을 반전시킨다.

const toggleSection = (subheader:string) => {
	setOpenSections((prev) => ({
		...prev, [subheader]: !prev[subheader]
	}))
}

따라서 해당 프로퍼티의 값이 true가 되면서 아래 하위 리스트(소메뉴 배열)가 보여지게 된다. 이 소메뉴에 대한 정보는 <NavList>에 props로 넘겨진다.

			{openSections[group.subheader] &&
              // list는 소메뉴 객체가 원소로 존재하는 배열
              group.items.map((list: NavListProps) => (
                <NavList
                  key={list.title + list.path}
                  data={list}
                  depth={1}
                  hasChild={!!list.children}
                  onCloseNav={onCloseNav}
                />
            ))}

--------------

NavList는 소메뉴 그룹 하나를 의미한다.

여기서는 data={list}라는 이름으로 소메뉴 객체를 받는다.
그리고 객체를 <NavItem>컴포넌트에 전달한다.

	<NavItem
        item={data}
        depth={depth}
        open={open}
        active={active}
        isExternalLink={isExternalLink}
        onClick={handleToggle}
    />

그리고 추가로 넘겨주는 값들은 아래와 같이 만들어 낸다.

const { pathname } = useLocation();

// useActiveLink훅에 소메뉴 객체의 path를 넘겨서 현재와 같으면 ture
// isExternalLink값은 true 또는 false
const { active, isExternalLink } = useActiveLink(data.path);
// 만약 active가 true라면 open은 true
const [open, setOpen] = useState(active);


여기서 depth는 NavSectionVertical에서 넘겨준 1이고,
open    



























