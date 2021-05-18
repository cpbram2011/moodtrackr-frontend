import React, {useState, useEffect} from 'react';
import { newTrackEntry, requestEntries } from '../../actions/track_entry_actions';
import {useDispatch, useSelector} from 'react-redux';
import {week, dotw, parseISOString} from '../../util/date';


const TrackEntriesComponent = ({track}) => {
    const dispatch = useDispatch();
    const [rating, updateRating] = useState(0);
    const [text, updateText] = useState("");
    const [date, updateDate] = useState(new Date());
    const [complete, updateComplete] = useState(true);
    
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
        let mapEntry = 'Q';
        if (d.getUTCDate() in entryDays) {
            let {text, rating, date, complete} = entryDays[d.getUTCDate()];
            date = new Date(date);
            date = date.getUTCDate();
            if (complete === undefined) {
                complete = 'O'
            } else {
                complete = complete ? "Y" : "N"
            }
            mapEntry = (
                <>
                    <p>{complete}</p>
                    <p>{text}</p>
                    <p>{rating}</p>
                    <p>{date}</p>
                </>
            )
        }
        return (
            <li key={i}>
                {/* <p>{d.getUTCDate()}</p>
                <p>{dotw[d.getUTCDay()]}</p> */}
                {mapEntry}
            </li>
        )   
    })
    
    const handleSubmit = e => {
        e.preventDefault();
        const newEntry = {
            date,
            text,
            rating,
            track_id: track._id,
            complete
        };
        dispatch(newTrackEntry(newEntry))
    };
    
    return (
        <>
            {!!entryLis ? entryLis : null}
            <div className="week"  >
                {track.name}
                {weekDivs}

            </div>
        <div className="new-entry">
            <p>add new entry:</p>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" onChange={e=>updateText(e.target.value)}/>
                <input type="number" onChange={e=>updateRating(e.target.value)} min="1" max="10"/>
                <input type='date' onChange={e=>updateDate(new Date(e.target.value))} min='1899-01-01' max={today} />
                <input type='checkbox' checked={complete} onChange={e=>updateComplete(!complete)} />
                <input type="submit" value="submit"/>

            </form>
        </div>
        </>
    )
}

export default TrackEntriesComponent;