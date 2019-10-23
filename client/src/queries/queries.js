import { gql } from 'apollo-boost'

// Construct the queries (gql package helps with parsing them)

// Queries:
const GET_BOOKS_QUERY = gql`
{
    books {
        id
        name
        genre
    }
}
`

const GET_AUTHORS_QUERY = gql`
{
    authors {
        id
        name
    }
}
`

const GET_BOOK_DETAILS_QUERY = gql`
query($id: ID!){
    book(id: $id) {
        id
        name
        genre
        author {
            id
            name
            age
            books {
                id
                name
            }
        }
    }
}
`

// Mutations:
const ADD_BOOK_MUTATION = gql`
    mutation addBook($name:String!, $genre:String!, $authorId:ID!) {
        addBook(name:$name, genre:$genre, authorId:$authorId) {
            name
            id
        }
    }
`

export {
    GET_AUTHORS_QUERY,
    GET_BOOKS_QUERY,
    GET_BOOK_DETAILS_QUERY,
    ADD_BOOK_MUTATION
}

