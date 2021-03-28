var initialState={
    user:""
}

function userRed(state=initialState, action) {
    switch (action.type) {
        case "setUser":
            return {...state, user:action.payload.user}
        case "removeUser":
            return{...state, user:""}
    
        default:
            return state
    
    }
}

export default userRed;