import React, {useState, useEffect} from 'react';
import { newTrackEntry, requestEntries } from '../../actions/track_entry_actions';
import {useDispatch} from 'react-redux';


const TrackEntries = ({track}) => {
    const dispatch = useDispatch();

    const [rating, updateRating] = useState(0);
    const [text, updateText] = useState("");
    const [date, updateDate] = useState(new Date());
    
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

    useEffect(() => {
        dispatch(requestEntries(track._id))
    }, [])
    const handleSubmit = e => {
        e.preventDefault();
        const newEntry = {
            date,
            text,
            rating,
            track_id: track._id
        };
        dispatch(newTrackEntry(newEntry))
    };

    return (
        <div className="new-track">

            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" onChange={e=>updateText(e.target.value)}/>
                <input type="number" onChange={e=>updateRating(e.target.value)} min="1" max="10"/>
                <input type='date' onChange={e=>updateDate(new Date(e.target.value))} min='1899-01-01' max={today} />
                <input type="submit" value="submit"/>

            </form>
        </div>
    )
}

export default TrackEntries;