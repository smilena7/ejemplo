import { combineReducers } from 'redux' // con combineReducers, pasamos mas de un reducers al store (ver linea 45)
import counter from './counterReducers'
import user from './userReducers'
import fruits from './fruitsReducer'

export default combineReducers({
    counter,
    user,
    fruits
})