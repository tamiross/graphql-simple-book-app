import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
// Components
import Header from 'components/header/header';
import { Button } from 'components/button/button';
import BookList from 'components/book_list/book_list';
import AddBook from 'components/add_book/add_book';
import { Container } from '@material-ui/core';
import Modal from 'components/modal/modal';

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
  const [isModalOpen, setIsModalOpen] = useState(false)

  const renderModal = () => {
    if (!isModalOpen) 
      return null;

    return (
      <Modal title='Add Book' onClose={() => setIsModalOpen(false)}>
        <AddBook />
      </Modal>
    )
  }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <main>
          <Container>
            <h1>B List</h1>
            <button onClick={() => setIsModalOpen(true)}>OPEN MODLA</button>
            {renderModal()}
            <BookList />
          </Container>
        </main>
      </div>
    </ApolloProvider >
  );
}

export default App;
