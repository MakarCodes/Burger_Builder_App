import React from 'react';
import classes from './FormInput.module.css'

const FormInput = ( props ) => {
    const { inputType, label } = props;
    let inputElement = null;

    switch(inputType) {
        case ('input'):
            inputElement = <input className={classes.Input} {...props} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.Input} {...props} />;
            break;
        default:
            inputElement = <input className={classes.Input} {...props} />;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{label}</label>
            {inputElement}
        </div>
    );
};

export default FormInput;