import React from 'react';
import { useStyles, Title, Content } from './styles';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const BookListItem = ({ name, onDeleteItem }) => {
    const classes = useStyles();

    const renderDeleteIcon = () => {
        const props = {
            className: classes.deleteIcon,
            onClick: onDeleteItem
        }

        return <DeleteForeverIcon {...props} />
    }

    return (
        <li className={classes.root}>
            <Paper className={classes.paper}>
                <Content>
                    <MenuBookIcon className={classes.bookIcon} />
                    <Title>{name}</Title>
                </Content>
                {renderDeleteIcon()}
            </Paper>
        </li>
    )
}

export default BookListItem;
