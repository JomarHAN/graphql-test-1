import './App.css';
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import CreateUser from './Components/CreateUser';

const errorLink = new onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GraphQL Error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:3010/graphql' })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <CreateUser />
    </ApolloProvider>
  );
}

export default App;
