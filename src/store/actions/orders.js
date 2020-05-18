import * as actionTypes from './actionTypes'
import axios from 'axios'


export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error
    };
};

export const purchaseBurgerSuccess = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS
    };
};

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('https://burger-app-ce2e9.firebaseio.com/orders.json', orderData)
            .then(response => {
                console.log(response.data);
                dispatch(purchaseBurgerSuccess());
            })
            .catch(err => {
                dispatch(purchaseBurgerFail(err));
            })
    }
}

