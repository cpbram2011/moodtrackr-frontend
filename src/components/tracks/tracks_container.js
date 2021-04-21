import {connect} from 'react-redux';
import {requestTracks, newTrack} from '../../actions/track_actions'
import Tracks from './tracks';


const mSTP = state => ({
    user_id: state.session.user.id,
    tracks: state.track
});


const mDTP = dispatch => ({
    requestTracks: () => dispatch(requestTracks()),
    newTrack: track => dispatch(newTrack(track))
})

export default connect(mSTP, mDTP)(Tracks);
