export default function Register() {
  return (
    <div
      style={{
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{}}>
        <h1>회원가입 페이지</h1>
        <form>
          <div>
            <label htmlFor="userid">아이디</label>
            <input type="text" id="userid" />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" />
          </div>
          <div>
            <label htmlFor="username">이름</label>
            <input type="text" id="username" />
          </div>
          <button type="submit">회원가입</button>
        </form>
      </div>
    </div>
  );
}
