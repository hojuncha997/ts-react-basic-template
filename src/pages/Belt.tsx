export default function Belt() {
  return (
    <>
      <h1>Belt</h1>

      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Leather Belt</td>
              <td>$20</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Chain Belt</td>
              <td>$15</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Seat Belt</td>
              <td>$10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <ul>
          <li style={{ border: "1px solid black", overflow: "hidden" }}>
            Leather Belt
          </li>
          <li style={{ border: "1px solid black", overflow: "hidden" }}>
            Chain Belt
          </li>
        </ul>
      </div>
    </>
  );
}
