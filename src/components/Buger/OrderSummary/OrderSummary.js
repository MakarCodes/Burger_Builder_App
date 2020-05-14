import React from 'react';

const OrderSummary = (props) => {
    const { ingredients } = props
    const ingredientsSummary = Object.keys(ingredients).map(ingredientKey => {
        return ( 
        <li key={ingredientKey}>
            <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {ingredients[ingredientKey]}
        </li> );
    });
    return (
       <React.Fragment>
           <h3>Your Order</h3>
           <p>Delicious burger with the following ingredients:</p>
           <ul>
                {ingredientsSummary}
           </ul>
           <p>Continue checkout?</p>
       </React.Fragment>
    );
};

export default OrderSummary;