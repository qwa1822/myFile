export default function CounterLetDocumentPage() {
  function onClickCountUp() {
    const count = Number(document.getElementById("qqq").innerText) + 1;
    document.getElementById("qqq").innerText = count;
  }

  function onClickCountDown() {
    const count = Number(document.getElementById("qqq").innerText) - 1;
    document.getElementById("qqq").innerText = count;
  }

  return (
    <>
      <div id="qqq">0</div>
      <button onClick={onClickCountUp}>카운트올리기!</button>
      <button onClick={onClickCountDown}>카운트내리기!</button>
    </>
  );
}
