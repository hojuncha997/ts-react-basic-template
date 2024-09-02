import { useState, useCallback, useEffect } from "react";
import { getMemberListApi } from "../../api_dashboard/member/memberApi";
import { useNavigate } from "react-router-dom";
import { PageableData } from "../../definitions";
import PageComponent from "../common/PageComponent";

import useCustomMove from "../../hooks/useCustomMove";

// return {
//   moveToList,
//   moveToPage,
//   moveToModify: (num: number, basePath?: string) =>
//     moveToPage(num, "modify", basePath),
//   moveToRead: (num: number, basePath?: string) =>
//     moveToPage(num, "read", basePath),
//   page,
//   size,
//   refresh,
// };
// };

type Member = {
  id: number;
  nickname: string;
  email: string;
  roleNames: string[];
  social: boolean;
};

type PageableParams = {
  page?: number;
  size?: number;
  sort?: string[];
};

export default function MemberListComponent() {
  // const [memberList, setMemberList] = useState<Member[]>([]);
  const [pageableParams, setPageableParams] = useState<PageableParams>({
    page: 0,
    size: 10,
  });

  const { moveToList, moveToModify, moveToRead, page, size } = useCustomMove();

  const [serverData, setServerData] = useState<PageableData<Member>>({
    content: [],
    pageable: {
      sort: {
        sorted: false,
        unsorted: false,
        empty: false,
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 0,
      paged: false,
      unpaged: false,
    },
    totalPages: 0,
    totalElements: 0,
    last: false,
    size: 0,
    number: 0,
    sort: {
      sorted: false,
      unsorted: false,
      empty: false,
    },
    numberOfElements: 0,
    first: false,
    empty: false,
  });

  const navigate = useNavigate();

  // const getMemberList = useCallback(async () => {
  //   const response = await getMemberListApi(pageableParams);
  //   // return response;
  //   if (response) {
  //     console.log(response);
  //     // setMemberList(response.content);
  //     setServerData(response);
  //   }
  // }, [pageableParams]);

  const handleMemberClick = (memberId: number) => {
    moveToRead(memberId, "/member");
  };

  const getMemberList = useCallback(async () => {
    try {
      // const response = await getMemberListApi(pageableParams);
      const response = await getMemberListApi({ page, size });

      if (response) {
        console.log(response);
        setServerData(response);
      }
    } catch (error) {
      console.error("Failed to fetch member list:", error);
      // 에러 처리 로직 (예: 사용자에게 알림)
    }
    // }, [pageableParams]); // pageableParams를 의존성 배열에 추가
  }, [page, size]);

  const handlePageChange = (newPage: number) => {
    // setPageableParams((prev) => ({ ...prev, page: newPage }));
    // moveToList({ page: newPage, size: pageableParams.size });
    moveToList({ page: newPage, size: pageableParams.size });
  };

  useEffect(() => {
    getMemberList();
  }, [getMemberList]);

  return (
    <div>
      {/* <h1>MemberComponent</h1> */}

      <div
        style={{
          padding: "1em",
          backgroundColor: "lightgray",
          marginBottom: "2em",
          borderRadius: "5px",
          display: "flex",
          //   justifyContent: "center",
        }}
      >
        <div
          style={{
            // width: "50%",
            display: "flex",
            // justifyContent: "space-between",
            // backgroundColor: "white",
            flexWrap: "wrap",
            gap: "0.5em",
          }}
        >
          <select style={{ padding: ".5em", borderRadius: "5px" }}>
            <option>nickname</option>
            <option>email</option>
            <option>roleNames</option>
            <option>social</option>
          </select>
          <input
            type="text"
            style={{
              padding: ".5em",
              borderRadius: "5px",
              border: "1px solid black",
            }}
            placeholder="검색어를 입력하세요"
          />
          <button
            style={{
              padding: ".5em 1em",
              borderRadius: "5px",
              border: "1px solid black",
            }}
          >
            검색
          </button>
          <button
            style={{
              padding: ".5em 1em",
              borderRadius: "5px",
              border: "1px solid black",
            }}
          >
            초기화
          </button>
        </div>
      </div>

      <div
        style={{
          overflowX: "auto",
          //   width: "100%",
        }}
      >
        <table
          style={{
            border: "solid 1px black",
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
            minWidth: "600px",
          }}
        >
          <thead />
          <tbody>
            <tr style={{ backgroundColor: "orange" }}>
              <th style={{ border: "solid 1px black", padding: "0.5em" }}>
                nickname
              </th>
              <th style={{ border: "solid 1px black" }}>email</th>
              <th style={{ border: "solid 1px black" }}>roleNames</th>
              <th style={{ border: "solid 1px black" }}>social</th>
            </tr>
            {/* {memberList.map((member, index) => ( */}
            {serverData.content.map((member, index) => (
              <tr
                style={{
                  backgroundColor: index % 2 === 0 ? "white" : "#f2f2f2",
                  cursor: "pointer",
                }}
                onClick={() => alert()}
              >
                <td style={{ border: "solid 1px black" }}>{member.nickname}</td>
                <td style={{ border: "solid 1px black" }}>{member.email}</td>
                <td style={{ border: "solid 1px black" }}>
                  {member.roleNames}
                </td>
                <td style={{ border: "solid 1px black" }}>
                  {member.social ? "social" : "local"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PageComponent
            serverData={serverData}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
