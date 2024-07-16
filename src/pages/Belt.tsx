import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
} from "../components/common";

export default function Belt() {
  return (
    <>
      <h1>Belt</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Leather Belt</TableCell>
            <TableCell>101110</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Chain Belt</TableCell>
            <TableCell>200sfsdfdf</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div></div>

      <div style={{ maxWidth: "500px" }}>
        <ul>
          <li
            style={{
              borderBottom: "1px solid black",
              overflow: "hidden",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Leather Belt</span>
            <span>Leather Belt</span>
          </li>
          <li style={{ borderBottom: "1px solid black", overflow: "hidden" }}>
            Chain Belt
          </li>
        </ul>
      </div>
    </>
  );
}
