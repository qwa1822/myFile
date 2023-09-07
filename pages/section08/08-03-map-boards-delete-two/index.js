import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const PATCH_DATA = gql`
  query {
    fetchBoards {
      contents
      number
      title
      writer
    }
  }
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      number
      message
    }
  }
`;

export default function staticRoutingMovedPage() {
  const { data } = useQuery(PATCH_DATA);
  const [DELETE] = useMutation(DELETE_BOARD);

  const StyleSheet = {
    margin: "10px",
    padding: "10px",
  };
  const ChangeBtn = e => {
    DELETE({
      variables: {
        number: Number(e.target.id),
      },
      refetchQueries: [{ query: PATCH_DATA }],
    });
  };
  return (
    <>
      {data?.fetchBoards?.map(item => (
        <>
          <div id={item.id}>
            <span style={StyleSheet}>{item.number}</span>
            <span style={StyleSheet}>{item.title}</span>
            <span style={StyleSheet}>{item.contents}</span>
            <button id={item.number} onClick={ChangeBtn}>
              앓는보이 Click
            </button>
          </div>
        </>
      ))}

      {/* <div>페이지 이동이 완료돼었습니다111.</div>
      <div>작성자:{data?.fetchBoard?.writer || "로딩중"}</div>
      <div>제목:{data?.fetchBoard?.title || "로딩중"}</div>
      <div>내용:{data?.fetchBoard?.contents || "로딩중"}</div> */}
    </>
  );
}
