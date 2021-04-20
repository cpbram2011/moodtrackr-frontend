import React from 'react';


import {createJournal, indexJournals} from '../../util/journal_api_util';

import {useSelector} from 'react-redux';
import {useState} from 'react';


const HomePage = () => {
    const user = useSelector(state => state.session.user)
    const [journalName, updateName] = useState('');


    const test = () => {
        createJournal({
            name: journalName,
            user_id: user.id
        })
          .then(res => console.log(res))
          .catch(err => console.log(err))
    }
    window.v = journalName;
    console.log(user);

    return (
        <div className="home">
            <button onClick={() => {indexJournals().then(res => console.log(res) ) }}></button>
            <form onSubmit={ e => {e.preventDefault(); test()}}>
                <input type="text" onChange={(e) => updateName(e.target.value)}/>
            </form>
            <button onClick={() => test()}>click</button>

        </div>
    )
};


export default HomePage;