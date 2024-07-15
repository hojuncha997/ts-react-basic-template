import { FC, ReactNode } from "react";
import ProductListComponent from "../../components/product/ProductListComponent";

type ProductListPageProps = {
  children?: ReactNode;
};

const ProductListPage: FC<ProductListPageProps> = ({ children }) => {
  return (
    <div>
      {/* <h1>Product List Page</h1> */}
      {/* {children} */}
      <ProductListComponent />
    </div>
  );
};

export default ProductListPage;
