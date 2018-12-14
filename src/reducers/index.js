import { combineReducers } from 'redux'
import groupReducer from './GroupReducer'
import propertyReducer from './PropertyReducer'

export default combineReducers({
    groupReducer,
    propertyReducer
})