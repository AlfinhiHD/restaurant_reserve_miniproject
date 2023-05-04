import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://restaurant-reserve.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "0ka0cpyMzGuWh4l94d9XMkJyr8o67jCBtF3xbDts3MBZXn3qSOCy5E2lWQcsQQqG",
  },
});

export default client;