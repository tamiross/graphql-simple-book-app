import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { GET_BOOKS } from '../queries/queries';

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