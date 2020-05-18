import * as actionTypes from '../actions/actionTypes'

const initialState = {
    purchased: false,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: false
            }
        case actionTypes.PURCHASE_BURGER_FAILED:
            return {
                ...state,
                loading: false
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS: 
            return {
                ...state,
                loading: false,
                purchased: true
            }
        default:
            return state;
    }
}

export default reducer;