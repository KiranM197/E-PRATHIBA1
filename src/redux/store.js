
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer, { emailVerificationReducer, examReducer, regReducer, userReducer1 } from './reducer';

const rootReducer = combineReducers({
    user: userReducer1,
    emailVerification:emailVerificationReducer,
    verifyUser:regReducer,
    exam : examReducer,
  });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;





