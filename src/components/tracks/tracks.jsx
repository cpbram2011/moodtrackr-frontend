import React, {Component, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestTracks, newTrack, deleteTrack} from '../../actions/track_actions';
import TrackEntries from './track_entries';


const Tracks = () => {
    const [trackName, updateTrackName] = useState("");
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);
    const tracks = useSelector(state => state.entities.tracks);
    useEffect (()=> {
        dispatch(requestTracks())
    }, [])
    
    const trackLis = Object.values(tracks).map(x => {
        return (
            <>
            <li key={x._id} id={x._id}>{x.name} <button onClick={() => { dispatch(deleteTrack(x._id))}}>Delete</button></li>
            <TrackEntries track={x} />
            </>
        )
    })
    

    
        return (
            <>
                <p>user_id = {user_id}</p>
            <div className="tracks">
                {trackLis}
                <li></li>
            </div>
            <div className="new-track">
                <h3>Add a new tracker:</h3>
                <form onSubmit={e => {
                    e.preventDefault();
                    dispatch(newTrack({user_id, name: trackName }))
                    e.target.firstElementChild.value = '';
                    }}>
                    <input type="text" onChange={e => updateTrackName(e.target.value)}/>
                    <input type="submit"/>
                </form>
            </div>
            </>
        )
    
}

export default Tracks