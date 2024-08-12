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
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{}}>
          <h1>로그인 페이지</h1>
          <form>
            <div>
              <label htmlFor="userid">아이디</label>
              <input type="text" id="userid" />
            </div>
            <div>
              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" />
            </div>
            <button type="submit">로그인</button>
          </form>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div onClick={() => handleNavigate("/register")}>회원가입</div>
      </div>
    </>
  );
}
