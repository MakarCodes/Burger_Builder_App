import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility/utility'

const initialState = {
    ingredients: {
        salad: 1,
        bacon: 2,
        cheese: 2,
        meat: 1
    },
    totalPrice: 3.99,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1.2,
    bacon: 1.2,
    meat: 2.2
}

const addIngredient = (state, action) => {
    const updatedCount = state.ingredients[action.ingredientName] + 1;
    const updatedIngredients = {
        ...state.ingredients
    }
    updatedIngredients[action.ingredientName] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[action.ingredientName];
    const updatedPrice = state.totalPrice + priceAddition
    const updatedState =  {
        ingredients: updatedIngredients,
        totalPrice: updatedPrice
    }
    return updateObject(state, updatedState)
}

const removeIngredient = (state, action) => {
    const oldCount = state.ingredients[action.ingredientName];
    if(oldCount <= 0) {
        return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...state.ingredients
    };
    updatedIngredients[action.ingredientName] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[action.ingredientName];
    const oldPrice = state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    const updatedObject =  {
        ingredients: updatedIngredients,
        totalPrice: newPrice
    }
    return updateObject(state, updatedObject)
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient( state, action );
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient( state, action )
        default: return state
    }
}

export default reducer;