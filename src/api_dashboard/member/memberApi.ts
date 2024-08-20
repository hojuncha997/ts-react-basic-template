import { axios } from "../../utils/axios";

type pageable = {
  page: number;
};

const getMemberListApi = async () => {
  const response = await axios.get("/api/member/list");
  return response.data;
};

export { getMemberListApi };
