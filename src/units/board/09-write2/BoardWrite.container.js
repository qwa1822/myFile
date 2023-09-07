import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWirte.presenter";
import { updateGraphQl, userGraphQlSettings } from "./BoardWirite.queries";
import { useRouter } from "next/router";

export default function BoardWrite({ isEdit, data }) {
  const Router = useRouter();
  const [userWriter, SetWriter] = useState("");
  const [mytitle, Settitle] = useState("");
  const [myContent, setContent] = useState("");
  const [updateBoard] = new useMutation(updateGraphQl);
  const [userResult] = new useMutation(userGraphQlSettings);
  const onClickSubmit = async e => {
    const result = await userResult({
      variables: {
        writer: userWriter,
        title: mytitle,
        contents: myContent,
      },
    });
    console.log(result.data.createBoard.number);
    const param = result.data.createBoard.number;
    Router.push(`/section09/09-04-boards/${param}`);
  };

  const onClickUpdate = async () => {
    // 여기서 수정하기 하자

    const MyVariable = {
      number: Number(Router.query.number),
    };

    if (mytitle) MyVariable.title = mytitle;
    if (userWriter) MyVariable.writer = userWriter;
    if (myContent) MyVariable.contents = myContent;

    const result = await updateBoard({
      variables: MyVariable,
    });
    console.log(result);
    Router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
  };
  const myWriter = e => {
    SetWriter(e.target.value);
  };

  const myTitle = e => {
    Settitle(e.target.value);
  };

  const ContentS = e => {
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
