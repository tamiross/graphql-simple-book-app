import React from 'react';
import { BaseStyle } from './styles';

const Backdrop = props => {
    const { children, onBackdropClick } = props
    
    return (
        <BaseStyle className="backdrop-wrapper" onClick={onBackdropClick}>
            {children}
        </BaseStyle>
    )
}

export default Backdrop;