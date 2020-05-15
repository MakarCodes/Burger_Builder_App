import React from 'react';
import classes from './CheckoutSummary.module.css';
import Button from '../../UI/Button/Button';
import Burger from '../../../components/Buger/Burger';

const CheckoutSummary = (props) => {
    const {ingredients, checkoutCancelled, checkoutContinued} = props;
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={ingredients} />
            </div>
            <Button btnType="Danger"
            clicked={checkoutCancelled}>CANCEL</Button>
            <Button btnType="Success"
            clicked={checkoutContinued}>CONTINUE</Button>
        </div>
    );
};

export default CheckoutSummary;