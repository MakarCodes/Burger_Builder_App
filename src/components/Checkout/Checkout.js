import React, { Component } from 'react';
import { connect } from 'react-redux'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

class Checkout extends Component {
    state = {
        continueOrder: false
    }
    checkoutCancelHandler = () => {
        this.setState({
            continueOrder: false
        })
    }
    checkoutContinueHandler = () => {
        this.setState({
            continueOrder: true
        })
    }
    render() {
        return (
            <div>
                <CheckoutSummary
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinueHandler}
                    ingredients={this.props.ingredients}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);