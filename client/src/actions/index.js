import {ADD_USER} from "./ActionTypes"

 function addUser(payload){
    return {
        type:ADD_USER,
        payload
    }
}

export {addUser}