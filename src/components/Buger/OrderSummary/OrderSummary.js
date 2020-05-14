import React from 'react';

import Button from '../../../components/UI/Button/Button'

const OrderSummary = (props) => {
    const { ingredients, cancelPurchase, proceedWithPurchase, price } = props
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
           <p><strong>Total Price: {price.toFixed(2)} $</strong></p>
           <p>Continue checkout?</p>
           <Button btnType='Danger' clicked={cancelPurchase}>CANCEL</Button>
           <Button btnType='Success' clicked={proceedWithPurchase}>CONTINUE</Button>
       </React.Fragment>
    );
};

export default OrderSummary;