export default function MainContent() {
  return (
    <div>
      {/* <h2 style={{ fontWeight: "400" }}>메인 컨텐츠</h2> */}
      <div
        style={{
          minHeight: "300px",
          borderRadius: "0.5em",
          // padding: "1em",
          marginBottom: "2rem",
        }}
      >
        <img
          src="/images/white_whale_20240813.png"
          alt="main"
          // style={{ width: "100%", borderBottom: "1px solid black" }}
          style={{ width: "100vw", borderBottom: "1px solid black" }}
        />
      </div>

      {/* <div
        style={{
          backgroundColor: "lightcoral",
          minHeight: "300px",
          borderRadius: "0.5em",
          padding: "1em",
          marginBottom: "2rem",
        }}
      >
        sdfsd
      </div> */}

      {/* <div style={{}}>
        <img
          src="/images/s_ZAHIVE.png"
          alt="main"
          style={{ width: "100%", borderRadius: "0.5em" }}
        />
      </div> */}
    </div>
  );
}
