import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div
        style={{
          //   backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   flexDirection: "column",
          height: "100%",
        }}
      >
        <div style={{ border: "1px solid black", padding: "1em" }}>
          <h5>로그인 페이지</h5>
          <form>
            <div style={{ marginBottom: "1em" }}>
              {/* <label htmlFor="userid">아이디</label> */}
              <input type="text" id="userid" style={{ padding: "1em" }} />
            </div>
            <div>
              {/* <label htmlFor="password">비밀번호</label> */}
              <input type="password" id="password" style={{ padding: "1em" }} />
            </div>
            <div style={{ marginTop: "1em" }}>
              <input type="checkbox" />
              <label htmlFor="remember">아이디 저장</label>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button type="submit" style={{ padding: "1em", flex: "1" }}>
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <div onClick={() => handleNavigate("/register")}>회원가입</div> */}
      </div>
    </>
  );
}
