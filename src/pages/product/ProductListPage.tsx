import { FC, ReactNode } from "react";

type ProductListPageProps = {
  children?: ReactNode;
};

const ProductListPage: FC<ProductListPageProps> = ({ children }) => {
  return (
    <div>
      <h1>Product List Page</h1>
      {children}
    </div>
  );
};

export default ProductListPage;
