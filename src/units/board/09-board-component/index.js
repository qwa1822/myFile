export default function BoardComponent({ isEdit }) {
  return (
    <div>
      <h1>{isEdit === true ? "수정" : "생성"}페이지</h1>
      제목:
      <input type="text" />
      <br />
      내용:
      <input type="text" />
      <br />
      <button>{isEdit === true ? "수정" : "생성"}하기</button>
    </div>
  );
}
