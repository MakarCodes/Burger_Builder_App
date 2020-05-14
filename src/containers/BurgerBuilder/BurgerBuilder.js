import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import Burger from '../../components/Buger/Burger'
import BuildControls from '../../components/Buger/BuildControls/BuildControls'
import Spinner from '../../components/UI/Spinner/Spinner'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Buger/OrderSummary/OrderSummary'

import * as actions from '../../store/actions/index'


class BurgerBuilder extends Component {
    state = {
        purchasing: false
    }
    componentDidMount() {
        this.props.onInitIngredients();
    }

    purchaseControl = () => {
        this.setState({ purchasing: true})
    }
    
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false})
    }

    purchaseProceedHandler = () => {
        alert('You continue!')
    }
    

    updatePurchaseState = (ingredients) => {
        const ingredientsSum = Object.keys(ingredients).map(ingredientKey => {
            return ingredients[ingredientKey]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        return ingredientsSum > 0;
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        }
        for(let key in disabledInfo) {
            // disableInfo[key] = disableInfo[key] <= 0 ? true : false
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let burger = this.props.error ? <p>Ingredients cannot be loaded!</p> : <Spinner />;
        let orderSummary = null;
        if(this.props.ingredients !== null) {
            burger = (
            <React.Fragment>
                <Burger ingredients={this.props.ingredients}/>
                <BuildControls 
                addIngredient={this.props.onAddedIngredient}
                removeIngredient={this.props.onRemovedIngredient}
                disabled={disabledInfo}
                purchaseable={this.updatePurchaseState(this.props.ingredients)}
                purchaseOrder={this.purchaseControl}
                price={this.props.totalPrice} />
            </React.Fragment>
            )

            orderSummary = (
                <OrderSummary 
                    ingredients={this.props.ingredients}
                    price={this.props.totalPrice}
                    proceedWithPurchase={this.purchaseProceedHandler}
                    cancelPurchase={this.purchaseCancelHandler}
                    />
            );
        }
        return (
           <React.Fragment>
                <Modal show={this.state.purchasing} hideBackdrop={this.purchaseCancelHandler}>
                    { orderSummary }
                </Modal>
               {burger}
           </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddedIngredient: ingName => dispatch(actions.addIngredient(ingName)),
        onRemovedIngredient: ingName => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder, axios)
