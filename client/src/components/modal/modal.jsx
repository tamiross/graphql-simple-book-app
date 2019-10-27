import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import Backdrop from 'components/backdrop/backdrop';
import { useStyles, BaseStyle, ModalHeader } from './styles';
import CloseIcon from '@material-ui/icons/Close';
import { useKeyPress } from 'hooks/index'


// Create (subscribe to) a context object.
// React will read the current context value 
// from the closest matching Provider above it in the component-tree
const Context = React.createContext(/* some value */);
Context.displayName = 'Modal Context';


// Modal Provider
export const ModalProvider = ({ children }) => {
    const modalRef = useRef();
    const [context, setContext] = useState();

    // make sure re-render is triggered after initial render
    // so modalRef exists.

    useEffect(() => {
        setContext(modalRef.current)
    }, [])

    return (
        <div className="container">
            <Context.Provider value={context}>
                {children}
                <div ref={modalRef}></div>
            </Context.Provider>
        </div>
    )
}

export const Modal = props => {
    const { children, className, style, title, onClose } = props;
    const modalNode = useContext(Context);
    const classes = useStyles();
    const escKeyPress = useKeyPress('Escape')

    const onCloseModalClick = e => {
        e.stopPropagation()
        onClose()
    }

    const onBackdropClick = e => {
        e.stopPropagation()
        onClose()
    }

    const onChildrenClick = e => {
        e.stopPropagation();
    }

    return modalNode ? ReactDOM.createPortal(
        <Backdrop className="modal-wrapper" onBackdropClick={e => onBackdropClick(e)} onKeyDown={() => console.log('KEY DOWN')}>
            <BaseStyle style={style} className={className} onClick={e => onChildrenClick(e)}>
                <ModalHeader className='modal-header'>
                    {title}
                    <CloseIcon onClick={e => onCloseModalClick(e)} className={classes.closeButton} />
                </ModalHeader>
                <div className="" style={{ padding: 24 }}>
                    {children}
                </div>
                {escKeyPress && onClose()}
            </BaseStyle>
        </Backdrop>,
        modalNode
    ) : null
}
