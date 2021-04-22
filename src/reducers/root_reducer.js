import { combineReducers } from "redux";
import session from "./session_reducers";
import modal from "./modal_reducer";
import errors from "./errors_reducer";
// import alert from "./alerts_reducers";
import tracks from './tracks_reducer';
import trackEntries from './track_entries_reducer';
import entities from './entities_reducer';


const RootReducer = combineReducers({
  session,
  errors,
  modal,
  entities
 
});

export default RootReducer;
