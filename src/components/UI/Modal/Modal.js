import React from 'react';

import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const Modal = ({ show, children, hideBackdrop }) => {
    return (
        <React.Fragment>
            <Backdrop showBackdrop={show} hideBackdrop={hideBackdrop}/>
            <div 
            className={classes.Modal}
            style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}>
                {children}
            </div>
        </React.Fragment>
    );
};

export default React.memo(Modal);