import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
// Components
import Header from 'components/header/header';
import { Button } from 'components/button/button';
import BookList from 'components/book_list/book_list';
import AddBook from 'components/add_book/add_book';
import { Container } from '@material-ui/core';

// Apollo client setup
const uri = 'http://localhost:5000/graphql'; // TODO: Move to config file
const client = new ApolloClient({
  uri,
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors:\n ----', graphQLErrors)
    console.log('>> networkError:\n ---- ', networkError)
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <main>
          <Container>
            <h1>Books List</h1>
            <BookList />
            <AddBook />
            <Button label="TEST" />
          </Container>
        </main>
      </div>
    </ApolloProvider >
  );
}

export default App;
