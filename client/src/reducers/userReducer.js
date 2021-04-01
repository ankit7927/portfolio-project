import {ADD_USER} from "../actions/ActionTypes"

var initialState={
    userInfo:{}
}

function userRed(state=initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {...state, state:action.payload}
        default:
            return state
    
    }
}

export default userRed;