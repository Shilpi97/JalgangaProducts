import React from 'react';
import web from "../src/images/homeImg.png";
import {NavLink} from "react-router-dom";
import Common from './Common';

const About = () => {
    return (<> 
        <Common name='About' des="Quality, compatibility and reliability of a product are the factors that a company must maintain to acquire a respectful position in the market. Owing to this reason, Jalganga products has become a leading manufacturer, exporter, supplier and trader of a wide range of architectural and hardware products." imgsrc={web} visit='/contact' btname="Contact Now" />
        <div className="container-fluid">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className='row'>
                        <h6><strong>CEO Name:</strong> Ankur Patel</h6>
                        <h6><strong>Contact No:</strong> +91-9913332946</h6>
                        <h6><strong>Email Id:</strong> jalganga_product@ymail.com, ankurgamdha@gmail.com</h6>
                        <h6><strong>Address:</strong> Gokul Nagar-6, Mavdi, Samrat Industrial Area, Rajkot</h6>
                        <h6></h6>
                        <br></br>
                        </div>
                    </div>
                </div>
        </div>

    </>);
}

export default About;