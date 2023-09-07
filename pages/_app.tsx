// import "../styles/globals.css";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";

export default function App({ Component }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해놓기
  });

 
              return (
              
                            <ApolloProvider client={client}>
                              <Component />
                            </ApolloProvider> 
                    );  
      }