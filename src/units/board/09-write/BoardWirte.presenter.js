import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI({
  onClickSubmit,
  myWriter,
  myTitle,
  ContentS,
  isEdit,
  onClickUpdate,
}) {
  return (
    <>
      <div>@@@@ 여기는 presenter입니다@@@@</div>
      <div>
        writer: <RedInput onChange={myWriter} type="text" />
        title: <RedInput onChange={myTitle} type="text" />
        contents:
        <RedInput onChange={ContentS} type="text" />
        <BlueButton onClick={isEdit ? onClickUpdate : onClickSubmit}>
          {isEdit === true ? "수정" : "생성"}
        </BlueButton>
      </div>
      <div>@@@@ 여기는 presenter입니다@@@@</div>
    </>
  );
}
