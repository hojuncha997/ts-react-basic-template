// import styled from "styled-components";

// import { ReactElement, ReactNode, CSSProperties  } from "react";

// type TableCellProps = {
//   children?: ReactNode;
//   style: CSSProperties;
// };

// export default function TableCell({ children, style  }: TableCellProps ): ReactElement {
//   return <StyledTableCell style={style}>{children}</StyledTableCell>;
// }


// const StyledTableCell = styled.td`
//   padding: 2.5em;
//   border-bottom: 1px solid rgba(224, 224, 224, 1);

//   @media (min-width: 768px) {
//     padding: 1em;
//   }
// `;

import styled from "styled-components";
import { ReactElement, ReactNode, CSSProperties } from "react";

type TableCellProps = {
  children?: ReactNode;
  style?: CSSProperties;
  mediaStyle?: CSSProperties;
};

export default function TableCell({ children, style, mediaStyle }: TableCellProps): ReactElement {
  return <StyledTableCell style={style} mediaStyle={mediaStyle}>{children}</StyledTableCell>;
}

const StyledTableCell = styled.td<{ mediaStyle?: CSSProperties }>`
  padding: 2.5em;
  border-bottom: 1px solid rgba(224, 224, 224, 1);

  @media (min-width: 768px) {
    padding: 1em;
  }

  ${({ mediaStyle }) => mediaStyle && `
    @media (min-width: 768px) {
      ${Object.entries(mediaStyle).map(([key, value]) => `${key}: ${value};`).join(' ')}
    }
  `}
`;