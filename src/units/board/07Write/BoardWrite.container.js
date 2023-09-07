import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWirte.presenter";
import { userGraphQlSettings } from "./BoardWirite.queries";

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);

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

    if (e.target.value && mytitle && myContent) {
      setIsActive(true);
    }
  };

  const myTitle = e => {
    Settitle(e.target.value);

    if (userWriter && e.target.value && myContent) {
      setIsActive(true);
    }
  };

  const ContentS = e => {
    setContent(e.target.value);

    if (userWriter && mytitle && e.target.value) {
      setIsActive(true);
    }
  };

  return (
    <>
      <div>여기는 Cotanienr#############</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        myWriter={myWriter}
        myTitle={myTitle}
        ContentS={ContentS}
        isActive={isActive}
      />
      <div>여기는 Cotanienr#############</div>
    </>
  );
}
