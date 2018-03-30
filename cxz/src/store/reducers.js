import { combineReducers } from 'redux'
export const ADD_CART = 'ADD_CART'
export const DELETE_CART = 'DELETE_CART'
export const UPDATE_GOODS_COUNT = 'UPDATE_GOODS_COUNT'
export const SELECTED_OR = 'SELECTED_OR'
let initState = {
    cart_list: []
}

function cart_list(state = initState.cart_list, action) {
    switch (action.type) {
        case ADD_CART:
            let flag = false
            state.forEach((item, idx) => {
                if (item.goods_id === action.data.goods_id) {
                    ++item.count,
                        flag = true
                }
            })
            return flag ? [...state] : [...state, action.data]
            break;
        case UPDATE_GOODS_COUNT:
            let arr = [...state]
            arr.forEach(item => {
                if (item.goods_id === action.id) {
                    item.count = action.data
                }
            })
            return arr
            break;
        case SELECTED_OR:
            let arr2 = [...state]
            arr2.forEach(item => {
                if (item.goods_id === action.id) {
                    item.selected = action.data
                }
            })
            return arr2
        break
        default: return state
    }
    return state
}
export default combineReducers({
    cart_list
})

