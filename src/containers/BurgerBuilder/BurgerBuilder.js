import React, { Component } from 'react'

import Burger from '../../components/Buger/Burger'
import BuildControls from '../../components/Buger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1.2,
    bacon: 1.2,
    meat: 2.2
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 4
        },
        totalPrice: 3.99
    }

    addIngredientHandler = type => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const updatedPrice = this.state.totalPrice + priceAddition
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        })
    }

    removeIngredientHandler = type => {
        if(this.state.ingredients[type] <= 0 ) {
            return;
        }
        const updatedCount = this.state.ingredients[type] - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const updatedPrice = this.state.totalPrice - priceAddition
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo) {
            // disableInfo[key] = disableInfo[key] <= 0 ? true : false
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                />
            </React.Fragment>
        )
    }
}

export default BurgerBuilder
