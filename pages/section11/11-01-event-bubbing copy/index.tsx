import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      writer
      number
      title
      contents
    }
  }
`;

export default function staticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const mystyles = {
    margin: "10px",
    padding: "10px",
  };
  const ChangeAlert = (e: MouseEvent<HTMLDivElement>) => {
    alert(e.currentTarget.id);
  };
  const qqq = () => {
    alert("클릭 타이틀");
  };

  return (
    <>
      {data?.fetchBoards.map((item: any) => (
        <div id={item.writer} onClick={ChangeAlert}>
          <span>
            <input type="checkbox" onClick={qqq} />
          </span>
          <span style={mystyles}>{item.number}</span>{" "}
          <span style={mystyles}>{item.title}</span>
          <span style={mystyles}>{item.contents}</span>
        </div>
      ))}
      {/* <div>페이지 이동이 완료돼었습니다111.</div>
      <div>작성자:{data?.fetchBoard?.writer || "로딩중"}</div>
      <div>제목:{data?.fetchBoard?.title || "로딩중"}</div>
      <div>내용:{data?.fetchBoard?.contents || "로딩중"}</div> */}
    </>
  );
}
