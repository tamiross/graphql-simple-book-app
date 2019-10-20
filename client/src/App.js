import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider  } from '@apollo/react-hooks';

// Components
import BookList from './components/book_list';
import AddBook from './components/add_book';

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
        <AddBook />
      </div>
    </ApolloProvider >
  );
}

export default App;
