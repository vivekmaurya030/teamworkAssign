import React from "react";
import { ReactDOM } from "react";
import services1 from './images/services1.png'
import services2 from './images/services2.png'
import services3 from './images/services3.png'
import services4 from './images/services4.png'
import services5 from './images/services5.png'
import services6 from './images/services6.png'
import { Link } from "react-router-dom";

export default function Services(){
    const servicesData=[
        {img: services1 , title:'Laundry'},
        {img: services2, title:'Residency'},
        {img: services3, title:'Kitchen'},
        {img: services4, title:'Office'},
        {img: services5, title:'Carpet Cleaning'},
        {img: services6, title:'Gadgets'},
        
    ];
    return(

        <div className="Services">
            <div className="Serivces-head"> 
                <h1>Our Services</h1>
            </div>
            <div className="Services-body">
                {
                    servicesData.map((service)=>(
                        <Link to="/OurServicesPage">
                            <div className="Services-card">
                            <div className="Services-card-img">
                                <img src={service.img} alt={service.title} />
                            </div>
                            <div className="Services-card-title">
                                <h3>{service.title}</h3>
                            </div>
                        </div>
                        </Link>
                    ))
                }
            </div>


        </div>
    )
}