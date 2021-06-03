import React, {useState} from 'react';

// import {useSelector} from 'react-redux';
// import {useState} from 'react';
import Tracks from '../tracks/tracks';
import Shop from '../shop/index'

const HomePage = () => {
    const [selected, updateSelected] = useState('tracks');


    return (
        <>
        <div className="tabs">
            <p onClick={() => updateSelected('tracks')}>Tracks</p>
            <p onClick={() => updateSelected('shop')}>Shop</p>
        </div>
        
        <div className="home">
            {selected === 'tracks' ? <Tracks /> : null }
            {selected === 'shop' ? <Shop /> : null }
        </div>

        </>
    )
}


export default HomePage;