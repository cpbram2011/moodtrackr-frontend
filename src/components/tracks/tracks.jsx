import React, {Component, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestTracks, newTrack} from '../../actions/track_actions';


const Tracks = () => {
    const [trackName, updateTrackName] = useState("");
    const dispatch = useDispatch();
    useEffect (()=> {
        dispatch(requestTracks())
    })
    const tracks = useSelector(state => state.track)
    const trackLis = Object.entries(tracks).map(x => {
        return (
            <li>{tracks[x]}</li>
        )
    })
    

    
        return (
            <div className="tracks">
                
            </div>
        )
    
}

export default Tracks