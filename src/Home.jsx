import React from 'react';
import web from "../src/images/homeImg3.png";
import {NavLink} from "react-router-dom";
import Common from './Common';

const Home = () => {
    return (<> 
        <Common name='Grow your business with' des="We are the team who can provide you with best hardware produts." imgsrc={web} visit='/product' btname="Our Products"/>
    </>);
}

export default Home;