import BoardWrite from "../../../../src/units/board/10write2/BoardWrite.container";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

export default function GraphqlMutationPage() {
  return (
    <div>
      <div>##################여기는 page입니다.</div>;
      <BoardWrite isEdit={false} />
      <div>여기는 page</div>
    </div>
  );
}
