import { combineReducers } from 'redux';

import tracks from './tracks_reducer';
import trackEntries from './track_entries_reducer';

export default combineReducers({
  tracks,
  trackEntries
});
