import React from "react";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaWhatsapp, FaLinkedin, } from "react-icons/fa";
import "./footer.scss";
import { Link } from "react-router-dom";
import appleStore from './img/appleStore.png'
import googlePlay from './img/googlePlay.png'


const Footers = () => {
  
  return (
    <div>
      <div className="footerMain">
        <div className="logo-footer">
          <h1>KLARA</h1>
        </div>
        <div className="section-middle">
          <div className="about">
            <h3 className="heading"><Link to="/AboutUsPage" style={{color
            :"white"}}> About Us</Link></h3>
            <p>Aditi Srivastava</p>
            <p>Shiksha Vishwakarma</p>
            <p>Shubham Tiwari</p>
            <p>Vivek Maurya</p>
            <p>Akash Gupta</p>
          </div>
          <div className="about">
            <h3 className="heading">Learn More</h3>
            <p>Terms And Conditions</p>
            <p>Privacy</p>
            <p>Security</p>
            <p>Site Map</p>
            <p>Toll free number: 255-324-4554</p>
          </div>
          <div className="about">
            <h3 className="heading">
              About Klara
            </h3>
            <p>FAQs</p>
            <p><Link to="/ContactPage">Contact</Link></p>
            <p>Blog</p>
          </div>
          <div className="about">
            <h3 className="heading">Social Links</h3>
            <div className="icons">
              <div className="twitter"><FaTwitter className="social-icon" id="twitter" /></div>
              <div className="instagram"><FaInstagram className="social-icon" id="instagram" /></div>
              <div className="facebook"><FaFacebook className="social-icon" id="facebook" /></div>
              <div className="whatsapp"><FaWhatsapp className="social-icon" id="whatsapp" /></div>
              <div className="linkedin"><FaLinkedin className="social-icon" id="linkedin" /></div>
              <div className="youtube"><FaYoutube className="social-icon" id="youtube" /></div>
            </div>
            <div className="play-store">
              <img src={googlePlay} alt="#" />
              <img src={appleStore} alt="#" />
            </div>
            {/* <SiGmail /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footers;
