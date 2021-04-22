import React from 'react';
import {openModal} from '../../actions/modal_actions'
import {useDispatch} from 'react-redux';


const Splash = () => {
    const dispatch = useDispatch();


    return (
        <div className="splash">
            <h1>Mood Trackr</h1>
            <h2>track yer mood</h2>
            <button onClick={() => dispatch(openModal("login"))}>Log In</button>
            <button onClick={() => dispatch(openModal("signup"))}>Sign Up</button>

        </div>

    )
}

export default Splash;