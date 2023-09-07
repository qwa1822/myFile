import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI({
  isActive,
  onClickSubmit,
  myWriter,
  myTitle,
  ContentS,
}) {
  return (
    <>
      <div>@@@@ 여기는 presenter입니다@@@@</div>
      <div>
        writer: <RedInput onChange={myWriter} type="text" />
        title: <RedInput onChange={myTitle} type="text" />
        contents:
        <RedInput onChange={ContentS} type="text" />
        <BlueButton isActive={isActive} onClick={onClickSubmit}>
          GRAPHQL-API요청하기
        </BlueButton>
      </div>
      <div>@@@@ 여기는 presenter입니다@@@@</div>
    </>
  );
}
