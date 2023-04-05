import data from '../data.json'

const INITIAL_STATE = data

function productReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case "HI" : {
            console.log('Hi')
            return state
        }
        default: 
            return state
    } 
}

export default productReducer