import React from 'react';

import classes from './Backdrop.module.css'

const Backdrop = ({ showBackdrop, hideBackdrop }) => (
    showBackdrop ? <div 
        className={classes.Backdrop}
        onClick={hideBackdrop}></div> : null
)

export default Backdrop;