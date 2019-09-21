import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  bookings: bookingReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer;