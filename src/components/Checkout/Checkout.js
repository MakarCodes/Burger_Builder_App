import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

const Checkout = (props) => {
    const checkoutCancelHandler = () => props.history.goBack();
    const checkoutContinueHandler = () => props.history.replace('/checkout/contact-data');
    let checkoutSummary = <Redirect to='/'/>;
    if(props.ingredients) {
        const purchaseRedirect = props.purchased ? <Redirect to='/'/> : null
        checkoutSummary = (
            <div>
                { purchaseRedirect }
                <CheckoutSummary
                checkoutCancelled={checkoutCancelHandler}
                checkoutContinued={checkoutContinueHandler}
                ingredients={props.ingredients}/>
                <Route 
                    path={props.match.path + '/contact-data'} 
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