import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo';

// Construct the queries (gql package helps with parsing them)
const GET_BOOKS = gql`
{
    books {
        id
        name
        genre
    }
}
`


class BookList extends Component {
    renderBooks = () => {
        const { data } = this.props;

        if (data.loading)
            return <div>loading books...</div>;

        return data.books.map(book => {
            return <li key={book.id}>{book.name}</li>
        })
    }

    render() {
        return (
            <div>
                <ul className="book-list">
                    {this.renderBooks()}
                </ul>
            </div>
        )
    }
}

export default graphql(GET_BOOKS)(BookList)