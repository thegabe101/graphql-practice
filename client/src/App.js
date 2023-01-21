import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, useMutation } from '@apollo/client';
import { DisplayData } from './components/DisplayData';

//hooks for both mutations and queries imported through apollo client
//react app is wrapped by the apollo client provider, akin to query hook in react 

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>User list</h1>
        <DisplayData />
      </div>
    </ApolloProvider>
  );
}

export default App;
