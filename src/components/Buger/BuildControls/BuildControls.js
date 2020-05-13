import React from 'react';

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];


const BuildControls = (props) => {
    const { addIngredient, removeIngredient, disabled, price } = props
    return (
        <div className={classes.BuildControls}>
        <p>Current price: <strong>{price.toFixed(2)} $</strong></p>
            {controls.map(ctr => {
                return <BuildControl 
                key={ctr.label} 
                labelName={ctr.label} 
                add={() => addIngredient(ctr.type)}
                remove={() => removeIngredient(ctr.type)}
                disabled={disabled[ctr.type]}    
                />
            })}
            <button className={classes.OrderButton}>ORDER NOW</button>
        </div>
    );
};

export default BuildControls;