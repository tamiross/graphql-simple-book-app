import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { GET_BOOKS_QUERY } from 'queries/queries';
import BookDetails from 'components/book_details/book_details';
// import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';
import BookListItem from 'components/book_list_item/book_list_item';

const onDeleteClick = e => {
    e.preventDefault();
    console.log('onDeleteClick', e)
}

const BookList = () => {
    const { loading, data } = useQuery(GET_BOOKS_QUERY)
    const [bookId, setBookId] = useState(0);

    const classes = useStyles();

    const onBookClick = (e, id) => {
        e.preventDefault();
        setBookId(id)
    }

    const renderBooks = books => {
        return books.map(book => {
            const props = {
                key: book.id,
                name: book.name,
                onClick: e => onBookClick(e, book.id),
                onDeleteClick: onDeleteClick
            }
            return <BookListItem {...props} />
        })
    }

    if (loading || loading === 'undefined')
        return null

    const books = data.books;

    return (
        <>
            <ul className={classes.bookList}>
                {renderBooks(books)}
            </ul>
            <BookDetails id={bookId} />
        </>
    )
}

export default BookList