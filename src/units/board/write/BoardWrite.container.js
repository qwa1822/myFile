import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWirte.presenter";
import { userGraphQlSettings } from "./BoardWirite.queries";

export default function BoardWrite() {
  const [userWriter, SetWriter] = useState("");
  const [mytitle, Settitle] = useState("");
  const [myContent, setContent] = useState("");
  const [userResult] = new useMutation(userGraphQlSettings);
  const onClickSubmit = async e => {
    const result = await userResult({
      variables: {
        writer: userWriter,
        title: mytitle,
        contents: myContent,
      },
    });
    console.log(result);
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
        aaa={onClickSubmit}
        bbb={myWriter}
        ccc={myTitle}
        ddd={ContentS}
      />
      <div>여기는 Cotanienr#############</div>
    </>
  );
}
