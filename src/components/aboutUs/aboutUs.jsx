import React from "react";
import './aboutUs.scss'
import aboutUs from './img/aboutUs.png'

const AboutUs=()=>{
    return(
        <div className="aboutUs">
            <div className="aboutUs-head">
                <h1>About Us</h1>
            </div>
            <div className="aboutUs-body">
                <div className="body-container">
                <div className="aboutUs-col1">
                    <img src={aboutUs} alt="" />
                    <h4>Team KLARA</h4>
                </div>
                <div className="aboutUs-col2">
                    <p>As co-founders of a cleaning company, we are committed to providing our clients with the highest quality service and most reliable results. Our team is highly experienced in all aspects of commercial and residential cleaning services, from deep scrubbing floors to dusting ceiling fans—no job is too difficult for us!We put attention into each detail and clean your space thoroughly every time, making sure that nothing gets left behind when you’re enjoying your fresh new environment. We also use only eco-friendly products as we believe in helping out mother earth while still getting the best possible results.Making things even easier on our customers is something else that we emphasize at our company; not only do we price competitively but will make arrangements around lives schedules so life doesn't have to pause just because it's changing seasons or needing routine maintenance.</p>
                </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;