import React from 'react';
import classes from './FormInput.module.css'

const FormInput = ( props ) => {
    const { elementType, label, elementConfig, value, change } = props;
    let inputElement = null;

    switch(elementType) {
        case ('input'):
            inputElement = <input 
            className={classes.Input} 
            {...elementConfig}
            onChange={change}
            value={value}/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
            className={classes.Input} 
            {...elementConfig}
            onChange={change} 
            value={value}/>;
            break;
        case ('select'):
            inputElement = (
            <select
                className={classes.Input}
                onChange={change} 
                value={value}>
                {elementConfig.options.map(option => (
                    <option 
                        value={option.value} 
                        key={option.value}>
                        {option.displayValue}
                    </option>
                ))}
                />;
            </select>
            )
            break;
        default:
            inputElement = <input 
            className={classes.Input} 
            {...elementConfig}
            onChange={change} 
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