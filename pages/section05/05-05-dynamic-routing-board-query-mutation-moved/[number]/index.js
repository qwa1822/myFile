import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      number
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();
  console.log(router);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  console.log(data);

  return (
    <>
      <div>{router.query.number}페이지 이동이 완료돼었습니다111.</div>
      <div>작성자:{data?.fetchBoard?.writer || "로딩중"}</div>
      <div>제목:{data?.fetchBoard?.title || "로딩중"}</div>
      <div>내용:{data?.fetchBoard?.contents || "로딩중"}</div>
    </>
  );
}
