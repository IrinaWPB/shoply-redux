import { combineReducers } from 'redux'
import productReducer from './products'
import cartReducer from './cart'

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
})

export default rootReducer
