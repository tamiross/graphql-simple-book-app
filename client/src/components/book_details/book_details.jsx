import React from 'react';
import { useQuery } from 'react-apollo';
import { GET_BOOK_DETAILS_QUERY } from 'queries/queries';

// Using Hooks...
const BookDetails = ({ id }) => {
    const { loading, data } = useQuery(GET_BOOK_DETAILS_QUERY, {
        variables: {
            id: id
        }
    })
    
    if (loading || loading === 'undefined')
        return null

    if (!data)
        return <p>Output book details here...</p>

    const book = data.book;

    return (
        <div>
            <div id='book-details'>
                <ul>
                    <li>Name: {book.name}</li>
                    <li>Genre:{book.genre}</li>
                    <li>Id: {book.id}</li>
                    <ul><b>All books by this author:</b>
                        {book.author.books.map(book => {
                            return <li key={book.id}>{book.name}</li>
                        })}
                    </ul>

                </ul>
            </div>
        </div>
    )
}

export default BookDetails