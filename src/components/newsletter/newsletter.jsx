import React from "react";
import './newsletter.scss'
import newsletter from './img/newsletter.png'

const Newsletter=()=>{
    return(
        <div className="newsletter">
            <div className="newsletter-col1">
                <img src={newsletter} alt="" />
            </div>
            <div className="newsletter-col2">
                <h1>Subscribe to our newsletter!</h1>
                <input type="email" name="email" id="email" placeholder="Enter your email" /><br />
                <button className="subscribe-btn">Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter;