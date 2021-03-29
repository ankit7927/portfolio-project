import {ADD_USER} from "../constants"

var initialState={
    user:""
}

function userRed(state=initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return Object.assign({}, state, {user:state.user.concat(action.payload.user)});
        case "removeUser":
            return{...state, user:""}
    
        default:
            return state
    
    }
}

export default userRed;