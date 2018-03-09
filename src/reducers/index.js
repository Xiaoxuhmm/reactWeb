import {combineReducers} from 'redux'
import stocks from './stocks'

const stocksApp = combineReducers({
  stocks
})

export default stocksApp;
