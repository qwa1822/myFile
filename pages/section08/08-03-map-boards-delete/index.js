import { gql, useMutation, useQuery } from "@apollo/client";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function staticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log(data?.fetchBoards);

  const mystyles = {
    margin: "10px",
    padding: "10px",
  };

  const onClickDelete = e => {
    deleteBoard({
      variables: {
        number: Number(e.target.id),
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <>
    특별한 이유가 없으면? Fragment로 감싸자! <div/>는 1개더 그려야되서 조금 느려짐
      {data?.fetchBoards.map(item => (
        <div key={item.number}>
          {" "}
          {/*index는 게시글을 삭제할때 ,다음게시글이 올라오면서 기존인덱스와 동일한값을 가지게 됌 */}
          <span>
            <input type="checkbox" />
          </span>
          <span style={mystyles}>{item.number}</span>{" "}
          <span style={mystyles}>{item.title}</span>
          <span style={mystyles}>{item.contents}</span>
          <span>
            <button id={item.number} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
      {/* <div>페이지 이동이 완료돼었습니다111.</div>
      <div>작성자:{data?.fetchBoard?.writer || "로딩중"}</div>
      <div>제목:{data?.fetchBoard?.title || "로딩중"}</div>
      <div>내용:{data?.fetchBoard?.contents || "로딩중"}</div> */}
    </>
  );
}
