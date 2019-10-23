import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { GET_BOOKS_QUERY } from '../queries/queries';
import BookDetails from './book_details';



const BookList = () => {
    const { loading, data } = useQuery(GET_BOOKS_QUERY)
    const [bookId, setBookId] = useState(0);
    
    const onBookClick = (e, id) => {
        e.preventDefault();
        setBookId(id)
    }

    const renderBooks = books => {
        return books.map(book => {
            return <li key={book.id} onClick={e => onBookClick(e, book.id)}>{book.name}</li>
        })
    }

    if (loading || loading === 'undefined')
        return null

    const books = data.books;

    return (
        <div>
            <ul className="book-list">
                {renderBooks(books)}
            </ul>
            <BookDetails id={bookId} />
        </div>
    )
}

export default BookList