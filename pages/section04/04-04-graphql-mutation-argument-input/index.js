import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const userGraphQlSettings = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
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
    <div>
      writer: <input onChange={myWriter} type="text" />
      title: <input onChange={myTitle} type="text" />
      contents:
      <input onChange={ContentS} type="text" />
      <button onClick={onClickSubmit}>GRAPHQL-API요청하기</button>
    </div>
  );
}
