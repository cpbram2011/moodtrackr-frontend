import * as TrackAPI from '../util/track_api_util';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";

export const receiveTracks = (tracks) => ({
    type: RECEIVE_TRACKS,
    tracks
})

export const receiveTrack = (track) => ({
    type: RECEIVE_TRACK,
    track
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_TRACK_ERRORS,
    errors,
});


export const requestTracks = (user_id) => dispatch => {
    TrackAPI.indexTracks()
      .then(res => { dispatch(receiveTracks(res.data))})
      .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const newTrack = (track) => dispatch => {
    TrackAPI.createTrack(track)
      .then(res => dispatch(receiveTrack(res.data)))
      .catach(err => dispatch(receiveErrors(err.response.data)))
}