import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility/utility'
import { setIngredients } from '../actions';

const initialState = {
    ingredients: null,
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
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState =  {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedState)
}

const removeIngredient = (state, action) => {
    if(state.ingredients[action.ingredientName] <= 0) {
        return;
    }
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState =  {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedState)
}

const setInitialIngredients = (state, action) => {
     return updateObject(state, {
        ingredients: {
            ...state.ingredients,
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 5.55,
        error: false
    })
}

const fetchIngredientsFailed = (state, action) => {
    return updateObject( state, {error: true});
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient( state, action );
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient( state, action );
        case actionTypes.SET_INGREDIENTS: return setInitialIngredients( state, action );
        case actionTypes.FETCH_INGREDIENTS_FAILED: return updateObject( state, action );
        default: return state
    }
}

export default reducer;