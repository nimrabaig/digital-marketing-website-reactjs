import './App.css';
import RouterConfig from './router';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";

function App() {

  //Apollo client setup
  const uploadLink = createUploadLink({
    uri: "https://adz7rajlui.execute-api.ca-central-1.amazonaws.com/graphql",
    headers: {
      authorization: localStorage.getItem("token") || null,
    },
  });
  const errorLink = onError(({ graphqlErrors, nerworkError }) => {
    if (nerworkError) {
      console.log(`Network error ${nerworkError}`);
    }
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        console.log(`GraphQL error ${message}`);
      });
    }
  });
  const link = from([errorLink, uploadLink]);

  const client = new ApolloClient({ cache: new InMemoryCache(), link });


  return (
    <ApolloProvider client={client}>
      <RouterConfig />
    </ApolloProvider>
  );
}

export default App;
