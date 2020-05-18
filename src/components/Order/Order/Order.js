import React from 'react';
import classes from './Order.module.css'

const Order = ({ ingredients, price, personName }) => {
    const ingredientsArray = [];
    for (let ingredient in ingredients) {
        ingredientsArray.push(
            {
                ingredientName: ingredient,
                ingredientCount: ingredients[ingredient]
            }
        )
    }
    const ingredientsOutput = ingredientsArray.map(ing => {
        return (
            <span 
                style={{textTransform: 'capitalize',
                        dislay: 'inline-block',
                        margin: '0 8px',
                        border: '1px solid #ccc',
                        padding: '5px'}}
                key={ing.ingredientName}>
                {ing.ingredientName}: (+{ing.ingredientCount})
            </span>
        )
    })
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price <strong>USD {Number.parseFloat(price).toFixed(2)}</strong></p>
            <p>Order by: <strong>{personName}</strong></p>
        </div>
    );
};

export default Order;