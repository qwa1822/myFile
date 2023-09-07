import { useMutation, gql } from "@apollo/client";

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
  const [myFunction] = useMutation(myGraphqlSettings);
  const onClickSubmit = async () => {
    const result = await myFunction({
      variables: {
        //variables 이게 $역할을 함
        writer: "훈이",
        title: "안녕하세요",
        contents: "반갑습니다",
      },
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API요청하기</button>;
}
