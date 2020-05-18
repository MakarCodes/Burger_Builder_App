import React from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

const Checkout = (props) => {
    const checkoutCancelHandler = () => props.history.goBack();
    const checkoutContinueHandler = () => props.history.replace('/checkout/contact-data');
        return (
            <div>
                <CheckoutSummary
                    checkoutCancelled={checkoutCancelHandler}
                    checkoutContinued={checkoutContinueHandler}
                    ingredients={props.ingredients}/>
                <Route 
                    path={props.match.path + '/contact-data'} 
                    component={ContactData}/>
            </div>
        );
}


const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);