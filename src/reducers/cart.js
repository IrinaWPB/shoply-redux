import { ADD_TO_CART, DELETE_FROM_CART } from "../actionTypes";
const INITIAL_STATE = {itemsCount: 0, itemsInCart: []}

function cartReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            return { ...state, itemsCount: state.itemsCount + 1, itemsInCart: [...state.itemsInCart, action.item]}
        }
        case DELETE_FROM_CART: {
            return { ...state, itemsCount: state.itemsCount - 1, itemsInCart: [...state.itemsInCart.filter((item, index) => index !== action.itemIndex)]}
        }
        default:
            return state
    }
}

export default cartReducer
