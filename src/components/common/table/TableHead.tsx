import { ReactNode, ReactElement } from "react";

type TableHeadProps = {
  children?: ReactNode;
};

export default function TableHead({ children }: TableHeadProps): ReactElement {
  return <thead>{children}</thead>;
}
