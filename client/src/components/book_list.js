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
    render() {
        console.log('props', this.props)
        return (
            <div>
                <ul className="book-list">
                    <li>Book name</li>
                </ul>
            </div>
        )
    }
}

export default graphql(GET_BOOKS)(BookList)