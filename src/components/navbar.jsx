import React from 'react';

import {logout} from '../actions/session_actions'
import {useDispatch} from 'react-redux';


const Navbar = () => {
    const dispatch = useDispatch();
    return (
        <div className="navbar">
            <h2>Habitus</h2>

            <ul>
                <li>Home</li>
                <li>Reminders</li>
                <li>History</li>
                <li>Activity</li>
                <li>Account</li>
                <li><button onClick={() => dispatch(logout())}>Log Out</button></li>
            </ul>

        </div>
    )
}

export default Navbar;

