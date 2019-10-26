import React from 'react';
import { useStyles, Title, Content, Subtitle, Header } from './styles';
import Paper from '@material-ui/core/Paper';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { GET_BOOKS_QUERY, DELETE_BOOK_MUTATION } from 'queries/queries';
import { useMutation } from 'react-apollo';

const BookListItem = (props) => {
    const classes = useStyles();
    const [deleteBook] = useMutation(DELETE_BOOK_MUTATION)

    const renderEditIcon = () => {
        return (
            <IconButton className={classes.editButton}>
                <EditIcon />
            </IconButton>
        )
    }

    const renderDeleteIcon = () => {
        const iconProps = {
            className: classes.deleteIcon,
            onClick: () => {
                const response = deleteBook({
                    variables: {
                        id: props.id
                    },
                    refetchQueries: [
                        { query: GET_BOOKS_QUERY }
                    ]
                });
            }
        }

        return (
            <IconButton {...iconProps}>
                <DeleteIcon />
            </IconButton>
        )
    }

    return (
        <li className={classes.root}>
            <Paper className={classes.paper}>
                <Content>
                    <MenuBookIcon id="book-icon" className={classes.bookIcon} />
                    <Header>
                        <Title>{props.name}</Title>
                        <Subtitle>{props.author.name}</Subtitle>
                    </Header>
                </Content>
                <div className="action-buttons">
                    {renderEditIcon()}
                    {renderDeleteIcon()}
                </div>
            </Paper>
        </li>
    )
}

export default BookListItem;
