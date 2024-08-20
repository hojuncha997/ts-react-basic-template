import { useState, useCallback, useEffect } from "react";
import { getMemberListApi } from "../../api_dashboard/member/memberApi";
import { useNavigate } from "react-router-dom";

type Member = {
  id: number;
  nickname: string;
  email: string;
  roleNames: string[];
  social: boolean;
};

export default function MemberListComponent() {
  const [memberList, setMemberList] = useState<Member[]>([]);

  const navigate = useNavigate();

  const getMemberList = useCallback(async () => {
    const response = await getMemberListApi();
    // return response;
    if (response) {
      console.log(response);
      setMemberList(response.content);
    }
  }, []);

  const handleNavigate = (id: number) => {
    navigate("/member");
  };

  useEffect(() => {
    getMemberList();
  }, []);

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
            {memberList.map((member, index) => (
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
      </div>
    </div>
  );
}
