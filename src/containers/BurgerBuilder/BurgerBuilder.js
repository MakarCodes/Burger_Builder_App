import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import Burger from '../../components/Buger/Burger'
import BuildControls from '../../components/Buger/BuildControls/BuildControls'
import Spinner from '../../components/UI/Spinner/Spinner'

import * as actions from '../../store/actions/index'


class BurgerBuilder extends Component {

    componentDidMount() {
        this.props.onInitIngredients();
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        }
        for(let key in disabledInfo) {
            // disableInfo[key] = disableInfo[key] <= 0 ? true : false
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let burger = null;
        this.props.ingredients !== null ? (
            burger = <Burger ingredients={this.props.ingredients}/>
        ) 
        : 
        (
            burger = <Spinner />
        )
        return (
            <React.Fragment>
                {/* <Burger ingredients={this.props.ingredients}/> */}
                {burger}
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
        onRemovedIngredient: ingName => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder, axios)
