import { combineReducers } from 'redux'
import auth from './auth'
import customers from '../pages/Customers'



export default combineReducers({ 
  auth,
  customers
 })


