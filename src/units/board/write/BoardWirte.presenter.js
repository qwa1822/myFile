import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI({ aaa, bbb, ccc, ddd }) {
  return (
    <>
      <div>@@@@ 여기는 presenter입니다@@@@</div>
      <div>
        writer: <RedInput onChange={aaa} type="text" />
        title: <RedInput onChange={bbb} type="text" />
        contents:
        <RedInput onChange={ccc} type="text" />
        <BlueButton onClick={ddd}>GRAPHQL-API요청하기</BlueButton>
      </div>
      <div>@@@@ 여기는 presenter입니다@@@@</div>
    </>
  );
}
