import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import {openModal} from '../../actions/modal_actions'
import {useDispatch} from 'react-redux';
import sunset from './sunset.jpg'
import friend from './friend.jpg'
import yoga from './yoga.jpg'
import { faPills, faUserClock, faChartArea, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function makeCarousel(){
    var items = [
        {
            name: "Chart positive change",
            description: "Seeing your behavior patterns can inspire life changing actions.",
            img: sunset
        },
        {
            name : "\"I just wanted to tell you how happy I am that you have made this habit tracker available to use online. It is wonderful... This is the easiest way of doing it that I have ever come across. Thanks!\"",
            description: "-A Real Person" ,
            img: friend   
        },
        {
            name : "Intuitive and easy to use",
            description: "Habitus follows a well-researched therapy model for people struggling with anxiety, stress, and depression, making it a convenient tool for people to use when they want to improve their mental health."  ,  
            img: yoga    
        }
    ];
    return (
        <Carousel className='my-car'>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props){
    return (
        <Paper>
            <img src={props.item.img}/>
            <span>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
            </span>
           
        </Paper>
    )
}

const Splash = () => {
    const dispatch = useDispatch();

    return (
        <div className="splash">
            <div className="header">
                <h1>Habitus</h1>
                <div>
                    <button className='login' onClick={() => dispatch(openModal("login"))}>Log In</button>
                    <button onClick={() => dispatch(openModal("signup"))}>Sign Up</button>



                </div>

            </div>
            {makeCarousel()}
            <div className="icons">
                <div>
                    <h2>
                    <FontAwesomeIcon icon={faChartArea} />
                    &nbsp;
                        Charts</h2>
                    <p>
                    Any health measurement you want to track can be tracked and displayed on the graphical charts. Over time you'll be able to see patterns emerge that can help you identify what works and doesn't work
                    </p>
                </div>
                <div>
                    <h2>
                    <FontAwesomeIcon icon={faPills} />
                    &nbsp;
                        Treament Tracking</h2>
                    <p>
                    Keep track of your Medications, Supplements, and Exercises. Any change in treatment can be tracked so you have a complete history. When these are shown against your charts, you can see if a treatment change had a positive or negative effect.</p>
                </div>
                <div>
                    <h2>
                    <FontAwesomeIcon icon={faUserClock} />
                    &nbsp;
                        Reminders</h2>
                    <p>With Reminders you can schedule text messages or emails to be sent to you on a regular basis to remind you to take your medications or to remind you to record your mood. </p>
                </div>
                <div>
                    <h2>
                    <FontAwesomeIcon icon={faSmile} />
                    &nbsp;
                        Wellness</h2>
                    <p>Mood tracking offers many benefits, leaving you more fulfilled and self-confident!</p>
                </div>

            </div>
            <div className='check'>

            <Button className="CheckButton" variant="contained" color='primary' onClick={() => dispatch(openModal("signup"))}>
                Check it out!
            </Button>
            </div>

        </div>

    )
}

export default Splash;