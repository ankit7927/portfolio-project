import userRed from './reducers/userReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux';

const store = createStore(userRed)

export default store
