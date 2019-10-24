import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { GET_BOOKS_QUERY } from 'queries/queries';
import BookDetails from 'components/book_details/book_details';
import { useStyles } from './styles';
import BookListItem from 'components/book_list_item/book_list_item';
import Grid from '@material-ui/core/Grid';

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
            console.log('book', book)
            const props = {
                key: book.id,
                name: book.name,
                author: book.author,
                onClick: e => onBookClick(e, book.id),
                onDeleteClick: onDeleteClick
            }
            return(
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <BookListItem {...props} />
                </Grid>
            ) 
        })
    }

    if (loading || loading === 'undefined')
        return null

    const books = data.books;

    return (
        <>
            <ul className={classes.bookList}>
                <Grid container spacing={2}>
                    {renderBooks(books)}
                </Grid>
            </ul>
            <BookDetails id={bookId} />
        </>
    )
}

export default BookList