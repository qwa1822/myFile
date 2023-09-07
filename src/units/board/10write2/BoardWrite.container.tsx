import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import BoardWriteUI from "./BoardWirte.presenter";
import { updateGraphQl, userGraphQlSettings } from "./BoardWirite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, Imyvarialbes } from "./BoardWrite.types";

export default function BoardWrite({ isEdit, data }: IBoardWriteProps) {
  const Router = useRouter();
  const [userWriter, SetWriter] = useState("");
  const [mytitle, Settitle] = useState("");
  const [myContent, setContent] = useState("");
  const [updateBoard] = useMutation(updateGraphQl);
  const [userResult] = useMutation(userGraphQlSettings);
  const onClickSubmit = async () => {
    const result = await userResult({
      variables: {
        writer: userWriter,
        title: mytitle,
        contents: myContent,
      },
    });
    console.log(result.data.createBoard.number);
    const param = result.data.createBoard.number;
    Router.push(`/section10/10-02-typescript-boards/${param}`);
  };

  const onClickUpdate = async () => {
    // 여기서 수정하기 하자

    const MyVariable: Imyvarialbes = {
      number: Number(Router.query.number),
    };

    if (mytitle) MyVariable.title = mytitle;
    if (userWriter) MyVariable.writer = userWriter;
    if (myContent) MyVariable.contents = myContent;

    const result = await updateBoard({
      variables: MyVariable,
    });
    console.log(result);
    Router.push(
      `/section10/10-02-typescript-boards/${result.data.updateBoard.number}`
    );
  };
  const myWriter = (e: ChangeEvent<HTMLInputElement>) => {
    SetWriter(e.target.value);
  };
  const myTitle = (e: ChangeEvent<HTMLInputElement>) => {
    Settitle(e.target.value);
  };

  const ContentS = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <>
      <div>여기는 Cotanienr#############</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        myWriter={myWriter}
        myTitle={myTitle}
        ContentS={ContentS}
        isEdit={isEdit}
        data={data} //undefined 이거나, data이거나 둘중하나!
      />
      <div>여기는 Cotanienr#############</div>
    </>
  );
}
