import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

const myGraphqlSettings = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  // const [counter, setCounter] = useState<number>(0);

  // const [myFunction] = useMutation<>(myGraphqlSettings);
  const [myFunction] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(myGraphqlSettings);
  const onClickSubmit = async () => {
    const result = await myFunction({
      variables: {
        //variables 이게 $역할을 함
        writer: "훈이",
        title: "안녕하세요",
        contents: "안녕하세요",
      },
    });

    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API요청하기</button>;
}
