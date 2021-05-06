import React, {useState, useEffect} from 'react';
import { newTrackEntry, requestEntries } from '../../actions/track_entry_actions';
import {useDispatch, useSelector} from 'react-redux';
import {week, dotw, parseISOString} from '../../util/date';


const TrackEntriesComponent = ({track}) => {
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
    
    const entries = useSelector(state => state.entities.trackEntries[track._id])
    let entryLis = false;
    const entryDays = {};
    
    
    
    if (entries) {
        entries.forEach(entry => {
            const day = parseISOString(entry.date)
          
            entryDays[day.getUTCDate()] = entry;
        });
        window.day = entryDays;
        window.week = week;
        
        // entryLis = entries.map(x => {
        //     return (
        //         <ul>
        //             <p>{x.text}</p>
        //             <p>{x.rating}</p>
        //             <p>{x.date}</p>
        //         </ul>
        //     )
        // })
    }
    
    const weekDivs = week.map((d, i) => {
        let mapEntry;
        if (d.getUTCDate() in entryDays) {
            const {text, rating, date} = entryDays[d.getUTCDate()];
            mapEntry = (
                <li>
                    <p>{text}</p>
                    <p>{rating}</p>
                    <p>{date}</p>
                </li>
            )
        }
        return (
            <div key={i}>
                <p>{d.getUTCDate()}</p>
                <p>{dotw[d.getUTCDay()]}</p>
                {mapEntry}
            </div>
        )   
    })
    
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
        <div className="new-entry">
            {!!entryLis ? entryLis : null}
            <div className="week"  
            >
                {weekDivs}

            </div>
            <p>add new entry:</p>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" onChange={e=>updateText(e.target.value)}/>
                <input type="number" onChange={e=>updateRating(e.target.value)} min="1" max="10"/>
                <input type='date' onChange={e=>updateDate(new Date(e.target.value))} min='1899-01-01' max={today} />
                <input type="submit" value="submit"/>

            </form>
        </div>
    )
}

export default TrackEntriesComponent;