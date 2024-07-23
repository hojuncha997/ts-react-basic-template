import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

// 메뉴의 대매뉴가 활성화인지, 소메뉴가 활성화인지, 외부 링크인지 확인
import useActiveLink from '../../../hooks/useActiveLink';

import { NavListProps } from './types';   


type NavListRootProps = {
    data: NavListProps;
    depth: number;
    hasChild: boolean;
}

export default function NavList({data, depth, hasChild}: NavListRootProps) {
    const {pathname} = useLocation();

    const {active, isExternalLink} = useActiveLink(data.path);

    const [open, setOpen] = useState(active);

    // active가 true일 때 open을 true로 설정
    useEffect(() => {
        if (active) {
            setOpen(true);
        }
    }, [active]);


    const handleToggle = () => {
        setOpen((prev) => !prev);
    }

    const handleClose = () => {
        setOpen(false);
    }


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
                <Collapse in={open} unmountOnExit>
                    <NavSubList data={data.children} depth={depth} />
                </Collapse>
            )}
        </>
    )
}


type NavSubListProps = {
    data: NavListProps[];
    depth: number;
}

function NavSubList({data, depth}: NavSubListProps) {
    return (
      <>
        {data.map((list) => {
            <NavList
                key={list.title + list.path}
                data={list}
                depth={depth + 1}
                hasChild={!!list.children}
            />
        })}
      </>
    )
}