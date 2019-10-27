import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
// Components
import Header from 'components/header/header';
import BookList from 'components/book_list/book_list';
import { Container } from '@material-ui/core';
import { ModalProvider } from 'components/modal/modal';

// Apollo client setup
const uri = 'http://localhost:5000/graphql'; // TODO: Move to config file
const client = new ApolloClient({
  uri,
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors:', graphQLErrors)
    console.log('>> networkError:', networkError)
  }
})


function App() {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <div className="App">
          <Header />
          <main>
            <Container>
              <BookList title='Book List' />
            </Container>
          </main>
        </div>
      </ModalProvider>
    </ApolloProvider >
  );
}

export default App;
