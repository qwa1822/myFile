import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

export const myGraphqlSettings = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {

    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [myFunction] = useMutation(myGraphqlSettings);
  const onClickSubmit = async () => {
    try {
      const result = await myFunction({
        variables: {
          //variables 이게 $역할을 함
          writer: "훈이",
          title: "안녕하세요",
          contents: "반갑습니다",
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number);

      router.push(
        `/section05/05-05-dynamic-routing-board-query-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API요청하기</button>;
}
