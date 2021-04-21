import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import TrackErrorsReducer from './track_errors_reducer';


export default combineReducers({
  session: SessionErrorsReducer,
  track: TrackErrorsReducer
});