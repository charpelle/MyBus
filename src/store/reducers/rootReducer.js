import { combineReducers } from 'redux';

// import bookingReducer from './bookingReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  // bookings: bookingReducer,
  user: userReducer
})

export default rootReducer;