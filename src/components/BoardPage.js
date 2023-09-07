export default function BoardPage({ title }) {
  return (
    <>
      <h1>{title}</h1>
      제목:
      <input type="text" />
      <br />
      내용:
      <input type="text" />
      <br />
      <button>수정하기</button>
    </>
  );
}
