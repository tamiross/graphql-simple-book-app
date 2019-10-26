import React, { useState, setState } from 'react';
import Backdrop from 'components/backdrop/backdrop';
import { BaseStyle, ModalHeader } from './styles';
import CloseIcon from '@material-ui/icons/Close';

const Modal = props => {
    const { children, className, style, onModalClick, title, onClose } = props;
    
    const onCloseModalClick = e => {
        e.stopPropagation()
        onClose()
    }

    const onBackdropClick = e => {
        e.stopPropagation()
        onClose()
    }

    const onChildrenClick = e => {
        onModalClick();
        e.stopPropagation();
    }

    return (
        <Backdrop className="modal-wrapper" onBackdropClick={e => onBackdropClick(e)}>
            <BaseStyle style={style} className={className} onClick={e => onChildrenClick(e)}>
            <ModalHeader className='modal-header'>
                    {title}
                    <CloseIcon onClick={e => onCloseModalClick(e)} style={{ cursor: 'pointer'}}/>
            </ModalHeader>
            <div className="" style={{ padding: 24}}>
                {children}
            </div>
            </BaseStyle>
        </Backdrop>
    )
}

export default Modal