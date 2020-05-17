import React from 'react';
import classes from './FormInput.module.css'

const FormInput = ( props ) => {
    const { elementType, label, elementConfig, value, change, invalid, validationIsRequired } = props;
    let inputElement = null;
    const inputClasses = [classes.Input]
    if(invalid && validationIsRequired) {
        inputClasses.push(classes.Invalid)
    }
    switch(elementType) {
        case ('input'):
            inputElement = <input 
            className={inputClasses.join(' ')} 
            {...elementConfig}
            onChange={change}
            value={value}/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
            className={inputClasses.join(' ')} 
            {...elementConfig}
            onChange={change} 
            value={value}/>;
            break;
        case ('select'):
            inputElement = (
            <select
                className={inputClasses.join(' ')}
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
            className={inputClasses.join(' ')} 
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