import { useMutation, gql } from "@apollo/client";

const myGraphqlSettings = gql`
  mutation {
    createBoard(writer: "123", title: "안녕하세요", contents: "헬로우") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myFunction] = useMutation(myGraphqlSettings);
  const onClickSubmit = async () => {
    const result = await myFunction();
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API요청하기</button>;
}
