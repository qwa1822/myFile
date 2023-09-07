import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/section05/05-02-static-routing-board-moved/1");
  };
  const onClickMove2 = () => {
    router.push("/section05/05-02-static-routing-board-moved/2");
  };
  const onClickMove3 = () => {
    router.push("/section05/05-02-static-routing-board-moved/3");
  };

  return (
    <>
      <button onClick={onClickMove1}>페이지 이동하기(1번)</button>
      <button onClick={onClickMove2}>페이지 이동하기(2번)</button>
      <button onClick={onClickMove3}>페이지 이동하기(3번)</button>
    </>
  );
}
