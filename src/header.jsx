import React from "react";
import { ReactDOM } from "react";
import klaralogo from './images/klaralogo.png';

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
                <li><a href="">HOME</a></li>
                <li><a href="">PRODUCTS</a></li>
                <li><a href="">REVIEWS</a></li>
                <li><a href="">FAQS</a></li>
                <li><a href="">BLOG</a></li>
                <li><a href="">LOGIN / SIGN UP</a></li>
            
            </ul>
        </nav>
    </div>
    )
}