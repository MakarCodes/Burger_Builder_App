import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility/utility'

const initialState = {
    purchased: false,
    loading: false
}

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, {loading: false});
};

const purchaseBurgerFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const purchaseBurgerSuccess = (state, action) => {
    return updateObject(state, {loading: false, purchased: true})
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_FAILED: return purchaseBurgerFail(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
        default: return state;
    }
}

export default reducer;