import React from 'react';
import BookList from './components/book_list';
import ApolloClient from 'apollo-boost';
import { ApolloProvider  } from '@apollo/react-hooks';

// Apollo client setup
const uri = 'http://localhost:5000/graphql'; // TODO: Move to config file
const client = new ApolloClient({
  uri
})

function App() {
  return (
    <ApolloProvider  client={client}>
      <div className="App">
        <h1>Books List</h1>
        <BookList />
      </div>
    </ApolloProvider >
  );
}

export default App;
