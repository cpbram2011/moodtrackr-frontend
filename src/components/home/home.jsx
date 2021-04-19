import React from 'react';
import {journals} from '../../util/session_api_util';

const HomePage = () => {


    const test = () => {
        journals()
          .then(res => console.log(res))
          .catch(err => console.log(err))
    }
    return (
        <div className="home">
        
            <button onClick={() => test()}>click</button>
        
        </div>
    )
};


export default HomePage;