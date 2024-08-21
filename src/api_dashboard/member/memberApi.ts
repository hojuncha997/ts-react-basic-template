import { axios } from "../../utils/axios";

type PageableParams = {
  page?: number;
  size?: number;
  sort?: string[];
};

const getMemberListApi = async (params: PageableParams) => {
  alert("params: " + JSON.stringify(params));
  const response = await axios.get("/api/member/list", {
    params: {
      page: params.page,
      size: params.size,
      sort: params.sort?.join(',')
    },
  });
  return response.data;
};

export { getMemberListApi };