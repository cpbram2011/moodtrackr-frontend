import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import {openModal} from '../../actions/modal_actions'
import {useDispatch} from 'react-redux';
import sunset from './sunset.jpg'
import friend from './friend.jpg'
import yoga from './yoga.jpg'

function makeCarousel(props){
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
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props){
    const dispatch = useDispatch();
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img src={props.item.img}/>
            <Button className="CheckButton" onClick={() => dispatch(openModal("signup"))}>
                Check it out!
            </Button>
        </Paper>
    )
}

const Splash = () => {
    const dispatch = useDispatch();

    return (
        <div className="splash">
            <div className="header">
                <h1>Habitus</h1>
                <span>
                    <button className='login' onClick={() => dispatch(openModal("login"))}>Log In</button>
                    <button onClick={() => dispatch(openModal("signup"))}>Sign Up</button>

                </span>

            </div>
            {makeCarousel()}
        </div>

    )
}

export default Splash;