import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://restaurant-reserve-2.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "MpGd4B6zvxQGm82RwBSyCDejjTIC4AqOZQOCDJ6jbITVinlvTn5qWtgRq7rOdILn",
  },
});

export default client;