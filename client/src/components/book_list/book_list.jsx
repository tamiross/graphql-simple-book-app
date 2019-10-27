import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { GET_BOOKS_QUERY } from 'queries/queries';
import BookDetails from 'components/book_details/book_details';
import { useStyles, styles } from './styles';
import BookListItem from 'components/book_list_item/book_list_item';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddBook from 'components/add_book/add_book';
import { Modal } from 'components/modal/modal';


const BookList = props => {
    const { loading, data } = useQuery(GET_BOOKS_QUERY)
    const [bookId, setBookId] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState();
    const classes = useStyles();

    if (loading || loading === 'undefined')
        return null

    const books = data.books;


    const onBookClick = (e, id) => {
        e.preventDefault();
        setBookId(id)
    }

    const renderAddBook = () => {
        if (!isModalOpen)
            return null;

        const props = {
            title: 'Add Book',
            onClose: () => setIsModalOpen(false)
        }

        return (
            <Modal {...props}>
                <AddBook />
            </Modal>
        )
    }

    const renderAddIcon = () => {
        const props = {
            color: 'primary',
            style: styles.addIcon,
            onClick: () => setIsModalOpen(true)
        }

        return (
            <Fab {...props}>
                <AddIcon />
            </Fab>
        )
    }

    const renderBooks = books => {
        return books.map(book => {
            const props = {
                id: book.id,
                name: book.name,
                author: book.author,
                onClick: e => onBookClick(e, book.id)
            }
            return (
                <Grid key={book.id} item xs={12} sm={6} md={4} lg={3}>
                    <BookListItem {...props} />
                </Grid>
            )
        })
    }


    return (
        <>
            <h1>{props.title}</h1>
            <ul className={classes.bookList}>
                <Grid container spacing={2}>
                    {renderBooks(books)}
                </Grid>
            </ul>
            <BookDetails id={bookId} />
            {renderAddIcon()}
            {renderAddBook()}
        </>
    )
}

export default BookList