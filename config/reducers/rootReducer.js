import { combineReducers } from 'redux';
import userReducer from './userReducer';
// import orderReducer from './orderReducer'
// import productReducer from './productReducer'
// import cartReducer from './cartReducer'

const rootReducer = combineReducers({
  user: userReducer,
  // cart: cartReducer,
  // product: productReducer,
  // order: orderReducer,
});

export default rootReducer;
