import React from "react";
import "./aboutFounder.scss";
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
    profile: male,
  },
  {
    name: "Aditi Srivastava",
    desig: "Designer",
    about:
      " Hi, my name is  Aditi Srivastava, and I am frontend developer and designer for a leading cleaning company. As a frontend developer, my role is to create user-friendly interfaces that make it easy, By combining my technical skills with my eye for design, I am able to create visually appealing and functional websites that showcase our company's services in the best possible light.",
    profile: female,
  },
  {
    name: "Shubham Tiwari",
    desig: "Backend Developer",
    about:
      " I’m Shubham Tiwari the co-founder and a backend developer . and my role is to ensure that the behind-the-scenes functionality of our website is running smoothly and efficiently. As a backend developer, I am responsible for creating and maintaining databases, APIs, and other components that make our website work seamlessly. I am proud to play a role in achieving this mission by creating technology",
    profile: male,
  },
  {
    name: "Akash Gupta",
    desig: "Demotivational Speaker",
    about:
      " Hi, I'm Akash Gupta, and I'm a frontend developer at a cleaning providing service company. My role is to create visually stunning and user-friendly interfaces that make it easy for our clients to access our cleaning services. As a frontend developer, I'm proud to be a part of a company that is dedicated to creating a cleaner and healthier world.",
    profile: male,
  },
  {
    name: "Shiksha Vishwakarma",
    desig: "Designer",
    about:
      " I'm  Shiksha Vishwakarma, the co-founder of the company  and I am a digital designer and frontend developer. As a digital designer, my role is to create eye-catching designs that engage and delight our clients. By combining my skills in design and development, I am able to create websites that meet the highest standards of quality and functionality. ",
    profile: female,
  },
];
const AboutFounder = () => {
  return (
    <div className="aboutFounder">
      <div className="aboutFounder-head">
        <div className="navigation">
          <Link to="/" style={{color:"white"}}>Home</Link> / <Link to="/AboutUsPage" style={{color:"white"}}>About Us</Link>
        </div>
        <div className="aboutUs-head" >
            <div className="head-bg" style={{background:`url(${group})`,filter:'blur(10px)', backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}></div>
            <div className="aboutUs-head-detail">
            <h1>About Klara</h1>
            <div className="group-img" style={{background:`url(${group})`,backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}}></div>
            <h3>Team Klara</h3>
            <p>“We are Klara Cleaner, a professional cleaning company that services a wide range of clients throughout the country. Our main goal is to provide high quality, affordable cleaning services to those who need it most. This includes commercial offices, residential communities and even apartment complexes! We specialize in both commercial and residential cleaning and specialize in providing owner run businesses with top notch cleaning services at an affordable price.”</p>
            </div>
        </div>
      </div>
      <div className="Founders">
        <div className="heading"><h1>Get to know our founders!</h1></div>
        <div className="container">
          {founderDetail.map((item) => (
            <div className="founder-card">
              <div className="founder-card-img" style={{background:`url(${item.profile})`, backgroundSize:"100% 100%"}}></div>
              <h2>{item.name}</h2>
              <h3>{item.desig}</h3>
              <p>{item.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
