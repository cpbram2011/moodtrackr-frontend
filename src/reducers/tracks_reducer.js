import {RECEIVE_TRACK, RECEIVE_TRACKS, REMOVE_TRACK} from '../actions/track_actions';


export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_TRACKS:
            return action.tracks
            break;

        case RECEIVE_TRACK:
            return state.concat(action.track)
            break;
    
        case REMOVE_TRACK:
            console.log(action.track.id)
            return state.filter(x => x._id !== action.track._id)
            break;
    
        default:
            return state
            break;
    }
}

