import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility/utility'

const initialState = {
    purchased: false,
    loading: false,
    orders: []
}

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, {loading: false});
};

const purchaseBurgerFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const purchaseBurgerSuccess = (state, action) => {
    const orderWithId = updateObject(action.orderData, {id: action.orderID});
    return updateObject(state, 
        { 
        loading: false, 
        purchased: true,
        orders: state.orders.concat(orderWithId)
        })
}

const purchaseInit = (state, action) => {
    return updateObject(state, {purchased: false});
};

const fetchOrdersStart = (state, action) => {
    return updateObject(state, {loading: true});
}

const fetchOrdersFail = (state, action) => {
    return updateObject(state, {loading: false});
}

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {loading: false, orders: action.orders});
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_FAILED: return purchaseBurgerFail(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
        default: return state;
    }
}

export default reducer;