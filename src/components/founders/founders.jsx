import React,{useState} from "react";
import "./founders.scss";
import { Link } from "react-router-dom";
import male from './img/male.png';
import female from './img/female.png';
import group from './img/group.jpeg';
const founderDetail = [
  {
    name: "Vivek Maurya",
    desig: "CEO",
    about:
      " I am the CEO of a leading klara company. At our company, we believe that cleanliness is not just a chore, but a way of life. I am proud to lead a team of dedicated professionals who share this belief. In addition to my role as CEO, I am also a frontend developer. Combining my technical expertise with my passion for cleaning, I am constantly looking for innovative ways to improve our services and make our clients' lives easier.",
    profile: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Aditi Srivastava",
    desig: "Designer",
    about:
      " Hi, my name is  Aditi Srivastava, and I am frontend developer and designer for a leading cleaning company. As a frontend developer, my role is to create user-friendly interfaces that make it easy, By combining my technical skills with my eye for design, I am able to create visually appealing and functional websites that showcase our company's services in the best possible light.",
    profile: "'https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'",
  },
  {
    name: "Shubham Tiwari",
    desig: "Backend Developer",
    about:
      " I’m Shubham Tiwari the co-founder and a backend developer . and my role is to ensure that the behind-the-scenes functionality of our website is running smoothly and efficiently. As a backend developer, I am responsible for creating and maintaining databases, APIs, and other components that make our website work seamlessly. I am proud to play a role in achieving this mission by creating technology",
    profile: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Akash Gupta",
    desig: "Demotivational Speaker",
    about:
      " Hi, I'm Akash Gupta, and I'm a frontend developer at a cleaning providing service company. My role is to create visually stunning and user-friendly interfaces that make it easy for our clients to access our cleaning services. As a frontend developer, I'm proud to be a part of a company that is dedicated to creating a cleaner and healthier world.",
    profile: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Shiksha Vishwakarma",
    desig: "Designer",
    about:
      " I'm  Shiksha Vishwakarma, the co-founder of the company  and I am a digital designer and frontend developer. As a digital designer, my role is to create eye-catching designs that engage and delight our clients. By combining my skills in design and development, I am able to create websites that meet the highest standards of quality and functionality. ",
    profile: "https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];


const Founders =()=>{
    const [enter,setEnter]=useState(true)
    const OnMouseEnter=()=>{
        setEnter(true)
    }
    const OnMouseLeave=()=>{
        setEnter(false)
    }
    return (
        <div className="founders">
            <div className="founders-body">
                {founderDetail.map((item)=>(
                    <div className="founders-row" onMouseEnter={OnMouseEnter} onMouseLeave={OnMouseLeave}>
                        <div className="founders-img" style={{background:`url(${item.profile})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",backgroundPosition:"cover"}}></div>
                        <div className="founder-title" style={{display: enter? "none":""}}>
                            <h4>{item.name}</h4>
                            <h5>{item.desig}</h5>
                        </div>
                        <div className="founders-detail">
                                <div className="detail-back" style={{transform: enter ? "translateX(0)":"translateX(1000px)"}}> 
                                    <h4>{item.name}</h4>
                                    <h5>{item.desig}</h5>

                                </div>
                                <div className="detail-front" style={{transform: enter ? "translateX(0)":"translateX(-1000px)"}}>
                                    <p>{item.about}</p>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Founders;