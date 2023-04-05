import { ADD_TO_CART, DELETE_FROM_CART } from "./actionTypes";

export function add_to_cart(item) {
    return {
        type: ADD_TO_CART,
        item
    }
}

export function delete_from_cart(item, index) {
    return {
        type: DELETE_FROM_CART,
        itemIndex: index
    }
}