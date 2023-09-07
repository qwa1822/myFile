import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 3) {
      writer
      number
      title
      contents
    }
  }
`;

export default function staticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARD);

  console.log(data);

  return (
    <>
      <div>3페이지 이동이 완료돼었습니다111.</div>
      <div>작성자:{data?.fetchBoard?.writer || "로딩중"}</div>
      <div>제목:{data?.fetchBoard?.title || "로딩중"}</div>
      <div>내용:{data?.fetchBoard?.contents || "로딩중"}</div>
    </>
  );
}
