import { axios } from "../../utils/axios";

const getProductList = async () => {
  const response = await axios.get("/api/products/list");
  return response.data;
};

export default getProductList;
