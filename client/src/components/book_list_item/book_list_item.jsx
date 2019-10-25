import React from 'react';
import { useStyles, Title, Content, Subtitle, Header } from './styles';
import Paper from '@material-ui/core/Paper';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const BookListItem = (props) => {
    const classes = useStyles();

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
            onClick: props.onDeleteItem
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
