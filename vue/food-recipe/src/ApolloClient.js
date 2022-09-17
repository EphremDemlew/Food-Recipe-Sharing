import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:8080/v1/graphql",
});

const token = window.localStorage.getItem("token");

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers, // Include any existing headers
      ...((token && { authorization: `Bearer ${token}` }) || ""),
    },
  };
});
const cache = new InMemoryCache();
const link = authLink.concat(httpLink);
const apolloClient = new ApolloClient({
  link,
  cache,
});

export default apolloClient;
