import React from 'react';
import {logout} from '../../actions/session_actions'
import {useDispatch} from 'react-redux';


const HomePage = () => {
    const dispatch = useDispatch();

    return (
        <div className="home">
            <h1>Welcome Home!</h1>
            <button onClick={() => dispatch(logout())}>Log Out</button>
        </div>
    )
};


export default HomePage;