export default function MainContent() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "center",
        padding: "1em",
      }}
    >
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
          // src="/images/white_whale_20240813.png"
          // src="/images/miguel-urieta-6ZeLo8O7lU0-unsplash.jpg"
          src="/images/seoul_city_hall_20240828.jpg"
          alt="main"
          // style={{ width: "100%", borderBottom: "1px solid black" }}
          style={{ width: "50vw", borderBottom: "1px solid black" }}
        />
      </div>
      <div>sdf</div>

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
