import React from 'react';
import classes from './FormInput.module.css'

const FormInput = ( props ) => {
    const { elementType, label, elementConfig, value } = props;
    let inputElement = null;

    switch(elementType) {
        case ('input'):
            inputElement = <input 
            className={classes.Input} 
            {...elementConfig} 
            value={value}/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
            className={classes.Input} 
            {...elementConfig} 
            value={value}/>;
            break;
        default:
            inputElement = <input 
            className={classes.Input} 
            {...elementConfig} 
            value={value}/>;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{label}</label>
            {inputElement}
        </div>
    );
};

export default FormInput;