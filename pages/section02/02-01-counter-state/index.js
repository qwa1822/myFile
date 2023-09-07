import { useState } from "react";

export default function CounterLetDocumentPage() {
  let [count, setCount] = useState(0);
  function onClickCountUp() {
    setCount(count + 1);
  }

  function onClickCountDown() {
    setCount(count - 1);
  }

  return (
    <>
      <div id="qqq">{count}</div>
      <button onClick={onClickCountUp}>카운트올리기!</button>
      <button onClick={onClickCountDown}>카운트내리기!</button>
    </>
  );
}
