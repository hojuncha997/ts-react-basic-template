import { useState, useCallback, useEffect } from "react";
import getProductList from "../../api_dashboard/product/productApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "../common";

const ProductListComponent = () => {
  const [productList, setProductList] = useState([]);

  const fetchProductList = useCallback(async () => {
    const response = await getProductList();
    console.log("product response", response);
    if (response.dtoList) {
      setProductList(response.dtoList);
    }
  }, []);

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <div>
      <h1 style={{ margin: "0" }}>ProductListComponent typescript</h1>

      <div style={{ overflow: "true", minWidth: "200px" }}>
        <table
          style={{
            border: "solid 1px black",
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "solid 1px black",
                  backgroundColor: "lightskyblue",
                }}
              >
                순번
              </th>
              <th
                style={{
                  border: "solid 1px black",
                  backgroundColor: "lightskyblue",
                }}
              >
                상품명
              </th>
              <th
                style={{
                  border: "solid 1px black",
                  backgroundColor: "lightskyblue",
                }}
              >
                가격
              </th>
              <th
                style={{
                  border: "solid 1px black",
                  backgroundColor: "lightskyblue",
                }}
              >
                상품설명
              </th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product: any, index) => (
              <tr key={product.id}>
                <td
                  style={{ border: "solid 1px black", backgroundColor: "#EEE" }}
                >
                  {product.pno}
                </td>
                <td
                  style={{ border: "solid 1px black", backgroundColor: "#EEE" }}
                >
                  {product.pname}
                </td>
                <td
                  style={{ border: "solid 1px black", backgroundColor: "#EEE" }}
                >
                  {product.price}
                </td>
                <td
                  style={{ border: "solid 1px black", backgroundColor: "#EEE" }}
                >
                  {product.pdesc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProductListComponent;
