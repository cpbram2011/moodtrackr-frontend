import React from 'react';

// import {useSelector} from 'react-redux';
// import {useState} from 'react';
import Tracks from '../tracks/tracks';


const HomePage = () => {

    // const [journalName, updateName] = useState('');
    // const user = useSelector(state => state.session.user)

    // const handleSubmit = () => {
    //     createJournal({
    //         name: journalName,
    //         user_id: user.id
    //     })
    //       .then(res => console.log(res))
    //       .catch(err => console.log(err))
    // };

    // let journals;

    // indexJournals().then(res => {
    //     journals = res.data.map(x => {
    //         return (
    //             <li key={x.id}>{x.name}</li>            
    //         )
    //     });
    //     console.log(journals)

    // })
    return (
        <>
        {/* <div className="add-journal">
            <button onClick={() => {indexJournals().then(res => console.log(res))}}></button>
            <form onSubmit={ e => {e.preventDefault(); handleSubmit()}}>
                <input type="text" onChange={(e) => updateName(e.target.value)}/>
            </form>
            <button onClick={() => test()}>click</button>
        </div> */}
        <div className="journal-index">
          {/* {journals} */}
          <Tracks />
        </div>

        </>
    )
}


export default HomePage;