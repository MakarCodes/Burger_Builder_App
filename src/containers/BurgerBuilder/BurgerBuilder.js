import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import Burger from '../../components/Buger/Burger'
import BuildControls from '../../components/Buger/BuildControls/BuildControls'

import * as actions from '../../store/actions/index'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1.2,
    bacon: 1.2,
    meat: 2.2
}

class BurgerBuilder extends Component {
    // state = {
    //     ingredients: {
    //         salad: 1,
    //         bacon: 1,
    //         cheese: 1,
    //         meat: 4
    //     },
    //     totalPrice: 3.99
    // }

    componentDidMount() {
        //fetch data from db - initial ingredients
    }

    // addIngredientHandler = type => {
        // const updatedCount = this.state.ingredients[type] + 1;
        // const updatedIngredients = {
        //     ...this.state.ingredients
        // }
        // updatedIngredients[type] = updatedCount;
        // const priceAddition = INGREDIENT_PRICES[type];
        // const updatedPrice = this.state.totalPrice + priceAddition
        // this.setState({
        //     ingredients: updatedIngredients,
        //     totalPrice: updatedPrice
        // })
    // }

    // removeIngredientHandler = type => {
    //     if(this.state.ingredients[type] <= 0 ) {
    //         return;
    //     }
    //     const updatedCount = this.state.ingredients[type] - 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const updatedPrice = this.state.totalPrice - priceAddition
    //     this.setState({
    //         ingredients: updatedIngredients,
    //         totalPrice: updatedPrice
    //     })
    // }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        }

        for(let key in disabledInfo) {
            // disableInfo[key] = disableInfo[key] <= 0 ? true : false
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <React.Fragment>
                <Burger ingredients={this.props.ingredients}/>
                <BuildControls 
                addIngredient={this.props.onAddedIngredient}
                removeIngredient={this.props.onRemovedIngredient}
                disabled={disabledInfo}
                price={this.props.totalPrice}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onAddedIngredient: ingName => dispatch(actions.addIngredient(ingName)),
        onRemovedIngredient: ingName => dispatch(actions.removeIngredient(ingName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)
