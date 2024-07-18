import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
} from "../components/common";
import TableCell from "../components/common/table/TableCell";
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
            <TableCell
              style={{ backgroundColor: "lightgrey" }}
              mediaStyle={{
                minWidth: 768,
                styles: { padding: "11em", backgroundColor: "blue" },
              }}
            >
              Leather Belt
            </TableCell>
            <TableCell>101110</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ backgroundColor: "ivory", padding: "1em" }}>
              <div>Chain Belt</div>
              <div>Chain Belt</div>
            </TableCell>
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
