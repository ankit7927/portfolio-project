import userRed from './reducers/userReducer'
//import { Provider } from 'react-redux'
import { createStore } from 'redux';


const loadState =()=>{
  try {
    var data = localStorage.getItem("state")
    if (data===null) {
      return undefined
    }
    return JSON.parse(data)
  } catch (e) {
    return undefined
  }
}

const saveState =(data)=>{
  var mainData = JSON.stringify(data)
  try {
    localStorage.setItem("state", mainData)
  } catch (e) {}
}

const presidentStore=loadState()

const store = createStore(userRed, presidentStore)

store.subscribe(()=>{
  saveState(store.getState())
})


export default store
