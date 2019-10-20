import { gql } from 'apollo-boost'

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

const GET_AUTHORS = gql`
{
    authors {
        id
        name
    }
}
`

export {
    GET_AUTHORS,
    GET_BOOKS
}