import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 0),
    },

    paper: {
        display: 'flex',
        alignItems: ' center',
        justifyContent: 'space-between',
        padding: theme.spacing(3, 2),
        border: '2px solid transparent',
        transition: '0.5s',
        '&:hover': {
            border: '2px solid #1976D2',
            transition: '0.5s',
        }
    },

    deleteIcon: {
        cursor: 'pointer',
        transition: '0.3s',
        padding: 4,
        '&:hover': {
            background: '#d3d3d3',
            borderRadius: '50%',
            color: 'red',
            transition: '0.3s'
        }
    },

    bookIcon: {
        marginRight: 12
    }
}));

export const Title = styled.div({
    fontWeight: 600,
    margin: 0
})

export const Subtitle = styled.div({
    fontSize: 12,
    color: '#888'
})

export const Content = styled.div({
    display: 'flex',
    alignItems: 'center'
})

export const Header = styled.div({
    display: 'flex',
    flexDirection: 'column'
})