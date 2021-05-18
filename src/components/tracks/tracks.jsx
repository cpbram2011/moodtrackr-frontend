import React, {Component, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestTracks, newTrack, deleteTrack} from '../../actions/track_actions';
import TrackEntries from './track_entries';
import {week, dotw, parseISOString} from '../../util/date';


const Tracks = () => {
    const [trackName, updateTrackName] = useState("");
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);
    const tracks = useSelector(state => state.entities.tracks);

    useEffect (()=> {
        dispatch(requestTracks())
    }, [])


    
    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    
    if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 
    today = yyyy+'-'+mm+'-'+dd;

    
    const weekDivs = week.map((d, i) => {
        
        return (
            <li key={i}>
                <p>{d.getUTCDate()}</p>
                <p>{dotw[d.getUTCDay()]}</p>
            </li>
        )   
    })


    let trackLis;
    if (tracks.none === true) {
        trackLis = <li>No tracks. Click 'Add Track' to get started!</li>
    } else {
        trackLis = Object.values(tracks).map(x => {
            return (
                <>
                {/* <li key={x._id} id={x._id}>{x.name} !!<button onClick={() => { dispatch(deleteTrack(x._id))}}>Delete</button></li> */}
                {/* move to track entries */}
                <TrackEntries track={x} />
                </>
            )
        })
    }

    

    
        return (
            <>

            <div className="tracks">
            <div className="header week">
                <li></li>
                {weekDivs}
            </div>
                {trackLis}
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