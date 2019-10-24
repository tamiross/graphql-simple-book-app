import React from 'react';
import { useStyles, Title, Content, Subtitle, Header } from './styles';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const BookListItem = (props) => {
    console.log('props', props)
    const classes = useStyles();

    const renderDeleteIcon = () => {
        const iconProps = {
            className: classes.deleteIcon,
            onClick: props.onDeleteItem
        }

        return <DeleteForeverIcon {...iconProps} />
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
                {renderDeleteIcon()}
            </Paper>
        </li>
    )
}

export default BookListItem;
