import { combineReducers } from 'redux';
import user from './user_reducer';
// import charity from './charity_reducer';


const rootReducer = combineReducers({
  //charity,
  user
});


export default rootReducer;