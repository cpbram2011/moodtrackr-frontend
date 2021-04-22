import {RECEIVE_ENTRIES} from '../actions/track_entry_actions';
import TrackErrorsReducer from './track_errors_reducer';


function TrackEntriesReducer (state = {}, action) {
    switch (action.type) {
        case RECEIVE_ENTRIES:
            state[action.payload.track_id] = action.payload.entries;
            return state;
            break;
    
        default:
            return state
            break;
    }
}

export default TrackEntriesReducer;
