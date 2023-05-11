import React from "react";
import { ReactDOM } from "react";
import img7 from './images/img7.png'
import img8 from './images/img8.png'
import img9 from './images/img9.png'
import img10 from './images/img10.png'
import img11 from './images/img11.png'
import img12 from './images/img12.png'
import '../../src/App.scss';


export default function CircularImg(){
    return(
        <div className="Circular">
            <div className="CircularBg">
                <div className="CenterImg">
                    <img src={img7} alt="" />
                    <h3>What's there for you?</h3>
                </div>
            </div>
            <div className="CircularImg">
                <div className="CircularImages img1">
                        <img src={img8} alt="" />
                        <h5>Bonded and insured employees</h5>
                </div>
                <div className="CircularImages img2">
                        <img src={img9} alt="" />
                        <h5>Regularly scheduled inspections</h5>
                </div>
                <div className="CircularImages img3">
                        <img src={img10} alt="" />
                        <h5>Free evaluation of your cleaning needs</h5>
                </div>
                <div className="CircularImages img4">
                        <img src={img11} alt="" />
                        <h5>Easy booking</h5>
                </div>
                <div className="CircularImages img5">
                        <img src={img12} alt="" />
                        <h5>100% Satisfaction gaurantee</h5>
                </div>
            </div>
        </div>
    )
}