import {RECEIVE_TRACK, RECEIVE_TRACKS} from '../actions/track_actions';


export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_TRACKS:
            return action.tracks
            break;

        case RECEIVE_TRACK:
            const newState = Object.assign({}, state, action.track)
            return newState
            break;
    
        default:
            return state
            break;
    }
}

