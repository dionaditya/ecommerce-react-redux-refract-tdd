import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {PRODUCTS_TYPES} from '../types/types'
const defaultProductState = {
  data: [],
  loading: true,
  error: false,
}

const productReducer = (state = defaultProductState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      return {
        data: action.payload,
        loading: false,
        error: false
      }
     
    default:
      return defaultProductState
  }
}

const rootReducers = combineReducers({
  productReducer
})

export default rootReducers
