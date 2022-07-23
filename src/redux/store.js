import { createStore } from 'redux' // con combineReducers, pasamos mas de un reducers al store (ver linea 45)
import rootReducer from './reducers'

 
// Store
const store = createStore(rootReducer)

export default store

