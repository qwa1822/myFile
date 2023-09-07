import BoardWrite from "../../../../../src/units/board/10write2/BoardWrite.container";
import { useMutation, gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
      number
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  return (
    <div>
      <div>##################여기는 page입니다.</div>;
      <BoardWrite isEdit={true} data={data} />
      <div>여기는 page</div>
    </div>
  );
}
