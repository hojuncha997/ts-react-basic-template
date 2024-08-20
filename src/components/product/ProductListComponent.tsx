import React, { useState, useCallback, useEffect } from "react";
import getProductList from "../../api_dashboard/product/productApi";
import useResponsive from "../../hooks/useResponsive";

const host = "http://localhost:8080";

interface Product {
  id: number;
  pno: number;
  pname: string;
  price: number;
  pdesc: string;
  uploadFileNames: string[];
}

const ProductListComponent: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const { width } = useResponsive();

  const fetchProductList = useCallback(async () => {
    const response = await getProductList();
    console.log("product response", response);
    if (response.dtoList) {
      setProductList(response.dtoList);
    }
  }, []);

  useEffect(() => {
    fetchProductList();
  }, [fetchProductList]);

  const getGridTemplateColumns = () => {
    if (width < 768) return "repeat(2, 1fr)";
    if (width < 1024) return "repeat(3, 1fr)";
    return "repeat(4, 1fr)";
  };

  const handleMoveToDetail = (id: number) => {
    alert("move to detail: " + id);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: getGridTemplateColumns(),
        gap: "10px",
        padding: "10px",
      }}
    >
      {productList.map((product: Product) => (
        <div
          key={product.pno}
          style={{
            border: "1px solid grey",
            // borderRadius: "5px",
          }}
          onClick={() => handleMoveToDetail(product.pno)}
        >
          <div
            style={{
              // borderTopLeftRadius: "5px",
              // borderTopRightRadius: "5px",
              borderBottom: "1px solid grey",
              // backgroundColor: "orange",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            {product.pno}
            <input type="checkbox" />
          </div>
          <div>
            <img
              alt="product"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                // borderRadius: "5px",
                // marginTop: "5px",
              }}
              src={`${host}/api/products/view/s_${product.uploadFileNames[0]}`}
            />
          </div>
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ marginBottom: "5px" }}>
              <div
                style={{
                  backgroundColor: "#EEE",
                  fontWeight: "600",
                  padding: "2px 5px",
                }}
              >
                상품명
              </div>
              <div>{product.pname}</div>
            </div>
            <div style={{ marginBottom: "5px" }}>
              <div
                style={{
                  backgroundColor: "#EEE",
                  fontWeight: "600",
                  padding: "2px 5px",
                }}
              >
                가격
              </div>
              <div>{product.price}</div>
            </div>
            <div style={{ marginBottom: "5px" }}>
              <div
                style={{
                  backgroundColor: "#EEE",
                  fontWeight: "600",
                  padding: "2px 5px",
                }}
              >
                설명
              </div>
              <div>{product.pdesc}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListComponent;
