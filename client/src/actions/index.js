import {ADD_USER} from "../constants"

 function addUser(payload){
    return {
        type:ADD_USER,
        payload
    }
}

export {addUser}