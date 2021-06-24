import './App.css';
import { ApolloClient, ApolloProvider, from, InMemoryCache, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import Form from './Components/Form';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GrapgQL Error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:3030/graphql' })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return (
    <ApolloProvider client={client} >
      <Form />
    </ApolloProvider>
  );
}

export default App;
