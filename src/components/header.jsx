import React from "react";
// import { ReactDOM } from "react";
import klaralogo from './images/klaralogo.png';
import { Link } from "react-router-dom";

export default function Header(){
    return(
    <div className="header">
        <div className="logo">
            <div className="logo-img">
                <img src={klaralogo} alt="" />
            </div>
            <div className="logo-head">
                <h1>Klara</h1>
            </div>

        </div>
        <nav className="menu"> 
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/">PRODUCTS</Link></li>
                <li><Link to="/">REVIEWS</Link></li>
                <li><Link to="/">FAQS</Link></li>
                <li><Link to="/">BLOG</Link></li>
                <li><Link to="/LogInPage">LOGIN / SIGN UP</Link></li>
            
            </ul>
        </nav>
    </div>
    )
}