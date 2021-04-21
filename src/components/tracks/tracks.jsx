import React, {Component, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestTracks, newTrack, deleteTrack} from '../../actions/track_actions';


const Tracks = () => {
    const [trackName, updateTrackName] = useState("");
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);
    const tracks = useSelector(state => state.track);
    useEffect (()=> {
        dispatch(requestTracks())
    }, [])
    const trackLis = Object.values(tracks).map(x => {
        
        return (
            <li key={x._id} >{x.name} <button onClick={() => { dispatch(deleteTrack(x._id))}}>Delete</button></li>
        )
    })
    

    
        return (
            <>
            <div className="tracks">
                {trackLis}
                <p>{user_id}</p>

            </div>
            <div className="new-track">
                <form onSubmit={e => {
                    e.preventDefault();
                    dispatch(newTrack({user_id, name: trackName }))}}>
                    <input type="text" onChange={e => updateTrackName(e.target.value)}/>
                    <input type="submit"/>
                </form>
            </div>
            </>
        )
    
}

export default Tracks