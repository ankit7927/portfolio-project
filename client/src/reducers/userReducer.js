import {ADD_USER} from "../actions/ActionTypes"


function userRed(state={}, action) {
    switch (action.type) {
        case ADD_USER:
            return {...state, state:action.payload}
        default:
            return state
    
    }
}

export default userRed;