import { PageableData } from "../../definitions";

export default function PageComponent<T>({
  serverData,
  onPageChange,
}: {
  serverData: PageableData<T>;
  onPageChange: (pageNumber: number) => void;
}) {
  const { number: currentPage, first, last, totalPages } = serverData;

  console.log("serverData:", serverData);
  console.log("PageComponent - Current page:", currentPage);
  console.log("PageComponent - Total pages:", totalPages);

  return (
    <div style={{ width: "100%", padding: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5em" }}>
        {!first && (
          <button
            onClick={() => {
              console.log(
                "PageComponent - Clicked Previous, going to page:",
                currentPage - 1
              );
              onPageChange(currentPage - 1);
            }}
            style={{
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            {`<이전`}
          </button>
        )}

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => {
              console.log("PageComponent - Clicked page:", index);
              onPageChange(index);
            }}
            style={{
              cursor: "pointer",
              border: currentPage === index ? "none" : "1px solid #e3e3e3",
              //   border: "none",
              padding: "0.5em 1em",
              borderRadius: "0.5em",
              backgroundColor: currentPage === index ? "orange" : "transparent",
            }}
          >
            {index + 1}
          </button>
        ))}

        {!last && (
          <button
            onClick={() => {
              console.log(
                "PageComponent - Clicked Next, going to page:",
                currentPage + 1
              );
              onPageChange(currentPage + 1);
            }}
            style={{
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            {`다음>`}
          </button>
        )}
      </div>
    </div>
  );
}

/////////////////////////////////////////////////////////

// import { PageableData } from "../../definitions";

// export default function PageComponent<T>({
//   serverData,
//   onPageChange,
// }: {
//   serverData: PageableData<T>;
//   onPageChange: (pageNumber: number) => void;
// }) {
//   const { pageable, first, last, totalPages } = serverData;
//   const currentPage = pageable.pageNumber;

//   console.log("serverData:", serverData);

//   console.log("PageComponent - Current page:", currentPage);
//   console.log("PageComponent - Total pages:", totalPages);

//   return (
//     <div style={{ width: "100%", padding: "1em" }}>
//       <div style={{ display: "flex", justifyContent: "center", gap: "0.5em" }}>
//         {!first && (
//           <button
//             onClick={() => {
//               console.log(
//                 "PageComponent - Clicked Previous, going to page:",
//                 currentPage - 1
//               );
//               onPageChange(currentPage - 1);
//             }}
//             style={{
//               // border: "1px solid black",
//               border: "none",
//               backgroundColor: "transparent",
//               //   padding: "0.5em",
//             }}
//           >
//             {`<이전`}
//           </button>
//         )}

//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               console.log("PageComponent - Clicked page:", index);
//               onPageChange(index);
//             }}
//             style={{
//               cursor: "pointer",
//               border: "1px solid black",
//               padding: "0.5em 1em",
//               borderRadius: "0.5em",
//               backgroundColor: currentPage === index ? "orange" : "transparent",
//             }}
//           >
//             {index + 1}
//           </button>
//         ))}

//         {!last && (
//           <button
//             onClick={() => {
//               console.log(
//                 "PageComponent - Clicked Next, going to page:",
//                 currentPage + 1
//               );
//               onPageChange(currentPage + 1);
//             }}
//             style={{
//               border: "none",
//               backgroundColor: "transparent",
//               //   padding: "0.5em",
//             }}
//           >
//             {`다음>`}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// const PageComponent = ({ serverData, movePage }) => {
//     console.log("PageComponent serverData:", serverData);

//     return (
//       <div className="flex justify-center m-6">
//         {serverData.prev ? (
//           <div
//             className="w-16 p-2 m-2 font-bold text-center text-blue-400"
//             onClick={() => movePage({ page: serverData.prevPage })}
//           >
//             Prev
//           </div>
//         ) : (
//           <></>
//         )}

//         {serverData.pageNumList.map((pageNum) => (
//           <div
//             key={pageNum}
//             className={`w-12 p-2 m-2 rounded shadow-md text-white text-center ${
//               serverData.current === pageNum
//                 ? "text-white bg-gray-500"
//                 : "bg-blue-400"
//             }`}
//             onClick={() => movePage({ page: pageNum })}
//           >
//             {pageNum}
//           </div>
//         ))}

//         {serverData.next ? (
//           <div
//             className="w-16 p-2 m-2 font-bold text-center text-blue-400"
//             onClick={() => movePage({ page: serverData.nextPage })}
//           >
//             Next
//           </div>
//         ) : (
//           <></>
//         )}
//       </div>
//     );
//   };

//   export default PageComponent;

////////////////////////////////////////////////////////////////////////////////////////////////

// import { PageableData } from "../../definitions";

// 구조분해 할당을 파라미터 선언부에서 하는 경우
// export default function PageComponent<T>({
//   serverData: { pageable },
// }: {
//   serverData: PageableData<T>;
// }) {

// export default function PageComponent<T>({
//   serverData,
//   onPageChange,
// }: {
//   serverData: PageableData<T>;
//   onPageChange: (pageNumber: number) => void;
// }) {
//   const { pageable, first, last } = serverData;

//   return (
//     <div style={{ width: "100%", padding: "1em" }}>
//       <div style={{ display: "flex", justifyContent: "space-around" }}>
//         {!serverData.first && (
//           <button
//             onClick={() => onPageChange(pageable.pageNumber)} // 이미 0-based이므로 그대로 사용
//             disabled={first}
//             style={{
//               border: "1px solid black",
//               backgroundColor: first ? "gray" : "lime",
//             }}
//           >
//             이전
//           </button>
//         )}

//         {serverData.totalPages > 0 &&
//           Array.from({ length: serverData.totalPages }, (_, index) => (
//             <button
//               key={index}
//               onClick={() => onPageChange(index + 1)}
//               style={{
//                 border: "1px solid black",
//                 backgroundColor:
//                   pageable.pageNumber === index ? "gray" : "skyblue",
//               }}
//             >
//               {index + 1}
//             </button>
//           ))}

//         {!serverData.last && (
//           <button
//             onClick={() => onPageChange(pageable.pageNumber + 2)} // 다음 페이지이므로 2를 더함
//             disabled={last}
//             style={{
//               border: "1px solid black",
//               backgroundColor: last ? "gray" : "lime",
//             }}
//           >
//             다음
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

/////////////////////////////////////////////////////////
