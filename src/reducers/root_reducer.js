import { combineReducers } from "redux";
import session from "./session_reducers";
import modal from "./modal_reducer";
import errors from "./errors_reducer";
// import alert from "./alerts_reducers";
// import question from './questions_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  modal,
  // alert,
  // question
});

export default RootReducer;
