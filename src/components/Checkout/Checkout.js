import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

const Checkout = (props) => {
    const { history, ingredients, purchased, match } = props;
    const checkoutCancelHandler = () => history.goBack();
    const checkoutContinueHandler = () => history.replace('/checkout/contact-data');
    let checkoutSummary = <Redirect to='/'/>;
    if(ingredients) {
        const purchaseRedirect = purchased ? <Redirect to='/'/> : null
        checkoutSummary = (
            <div>
                { purchaseRedirect }
                <CheckoutSummary
                checkoutCancelled={checkoutCancelHandler}
                checkoutContinued={checkoutContinueHandler}
                ingredients={ingredients}/>
                <Route 
                    path={match.path + '/contact-data'} 
                    component={ContactData}/>
            </div>
        )
    }
        return checkoutSummary;
}


const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        purchased: state.orders.purchased
    }
}

export default connect(mapStateToProps)(Checkout);