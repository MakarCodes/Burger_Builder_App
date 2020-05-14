import React from 'react';

import classes from './Modal.module.css'

const Modal = (props) => {
    const { show } = props;
    return (
        <div 
        className={classes.Modal}
        style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
        }}>
            {props.children}
        </div>
    );
};

export default Modal;