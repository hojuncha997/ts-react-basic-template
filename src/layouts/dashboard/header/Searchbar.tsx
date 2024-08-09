// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// type SearchbarProps = {
//     isOpen: boolean;
//     onCloseSearchbar: () => void;
// };

// export default function Searchbar({ onCloseSearchbar, isOpen }: SearchbarProps) {
//     const [isVisible, setIsVisible] = useState(false);

    
//     useEffect(() => {
//         if (isOpen) {
//           setIsVisible(true);
//         } else {
//           const timer = setTimeout(() => setIsVisible(false), 300);
//           return () => clearTimeout(timer);
//         }
//       }, [isOpen]);
    
//       if (!isVisible && !isOpen) return null;

//       return (
//         <>
//           <StyledBackdrop onClick={onCloseSearchbar} isOpen={isOpen} />
//           <StyledSearchbar isOpen={isOpen}>
//             <input type="text" placeholder="검색어를 입력하세요" />
//             <button>검색</button>
//           </StyledSearchbar>
//         </>
//       );
// }

// const StyledBackdrop = styled.div<{ isOpen: boolean }>`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     background-color: rgba(0, 0, 0, 0.5);
//     z-index: 1800;
//     opacity: ${props => props.isOpen ? 1 : 0};
//     transition: opacity 0.3s ease-in-out;
// `;


// const StyledSearchbar = styled.div<{ isOpen: boolean }>`
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%) scale(${props => props.isOpen ? 1 : 0.9});
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     width: 50%;
//     padding: 20px;
//     background-color: #fff;
//     border: 1px solid grey;
//     border-radius: 0.5em;
//     z-index: 1900;
//     opacity: ${props => props.isOpen ? 1 : 0};
//     transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
// `;

import React, { useEffect, useState } from "react";
import styled from "styled-components";

type SearchbarProps = {
    isOpen: boolean;
    onCloseSearchbar: () => void;
};

export default function Searchbar({ onCloseSearchbar, isOpen }: SearchbarProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <>
            <StyledBackdrop isVisible={isVisible} onClick={onCloseSearchbar} />
            <StyledSearchbar isVisible={isVisible}>
                <div style={{display:"flex", justifyContent:"space-between", padding:"1em"}}>
                    <input type="text" placeholder="검색어를 입력하세요" style={{border:"transparent", width:"70%"}} />
                    <button style={{padding:"1em", border:"none", borderRadius:"0.5em"}}>검색</button>
                </div>
                <div style={{border: "0.1px solid black"}}></div>
                <div style={{minWidth:"300px"}}>
                    본문
                </div>
            </StyledSearchbar>
        </>
    );
}

const StyledBackdrop = styled.div<{ isVisible: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1800;
    opacity: ${props => props.isVisible ? 1 : 0};
    visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

const StyledSearchbar = styled.div<{ isVisible: boolean }>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(${props => props.isVisible ? 1 : 0.9});
    // display: flex;
    // flex-direction: row;
    // justify-content: center;
    align-items: center;
    width: 50%;
    padding: 20px;
    background-color: #fff;
    border: 1px solid grey;
    border-radius: 0.5em;
    z-index: 1900;
    opacity: ${props => props.isVisible ? 1 : 0};
    visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, visibility 0.3s ease-in-out;

    @media (max-width: 768px) {
        width: 90%;
    }
`;