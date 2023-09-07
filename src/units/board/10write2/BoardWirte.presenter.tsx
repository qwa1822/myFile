import { ChangeEvent, MouseEvent } from "react";
import { BlueButton, RedInput } from "./BoardWrite.styles";

import { IBoardWriteUI } from "./BoardWrite.types";

export default function BoardWriteUI({
  onClickUpdate,
  onClickSubmit,
  myWriter,
  myTitle,
  ContentS,
  isEdit,
  data,
}: IBoardWriteUI) {
  return (
    <>
      <div>@@@@ 여기는 presenter입니다@@@@</div>
      <div>
        writer:{" "}
        <RedInput
          onChange={myWriter}
          defaultValue={data?.fetchBoard?.writer}
          type="text"
        />
        title:{" "}
        <RedInput
          onChange={myTitle}
          defaultValue={data?.fetchBoard?.title}
          type="text"
        />
        contents:
        <RedInput
          onChange={ContentS}
          type="text"
          defaultValue={data?.fetchBoard?.contents}
        />
        <BlueButton onClick={isEdit ? onClickUpdate : onClickSubmit}>
          {isEdit === true ? "수정" : "생성"}
        </BlueButton>
      </div>
      <div>@@@@ 여기는 presenter입니다@@@@</div>
    </>
  );
}
