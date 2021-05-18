import {useDispatch, useSelector} from 'react-redux';
import {newTrack} from '../../actions/track_actions';
import {useState} from 'react'

const NewTrackForm = () => {
    const dispatch = useDispatch();
    const [trackName, updateTrackName] = useState("");
    const user_id = useSelector(state => state.session.user.id);
    return (
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

    )


}

export default NewTrackForm;
