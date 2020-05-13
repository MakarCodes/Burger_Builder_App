import React from 'react';

import classes from './BuildControl.module.css'

const BuildControl = (props) => {
    const { labelName, add, remove, disabled } = props
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{labelName}</div>
            <button 
                className={classes.More} 
                onClick={add}>More</button>
            <button 
                className={classes.Less}
                onClick={remove}
                disabled={disabled}>Less</button>
        </div>
    );
};

export default BuildControl;