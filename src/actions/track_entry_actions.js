import * as EntryAPI from '../util/track_api_util';
import { receiveErrors } from './track_actions';

export const RECEIVE_ENTRIES = "RECEIVE_ENTRIES";


export const receiveEntries = payload => {
    return ({
    type: RECEIVE_ENTRIES,
    payload
    });

};


export const requestEntries = trackId => dispatch => {
    EntryAPI.indexTrackEntries(trackId)
      .then(res => dispatch(receiveEntries(res.data)))
      .catch(err => console.log(err))
};


export const newTrackEntry = entry => dispatch => {
    EntryAPI.addTrackEntry(entry)
      .then(res => console.log(res))
      .catch(err => console.log(err))
}