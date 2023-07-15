import React from "react";

import "./footer.scss";
import { Link } from "react-router-dom";
import appleStore from './img/appleStore.png'
import googlePlay from './img/googlePlay.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footers = () => {
  
  return (
    <div>
      <div className="footerMain">
      <div className="logo-head">
            <h2 style={{color:"white",fontSize:"3rem"}}>KLARA MOON</h2>
          <h6 style={{color:"white",textAlign:"center"}}>
            cleaning service providing&nbsp;<span className="cmpy">Company</span>
          </h6>
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
            <p><Link to="/ContactPage" style={{color
            :"#fffefe7d"}}>Contact</Link></p>
            <p>Blog</p>
          </div>
          <div className="about">
            <h3 className="heading">Social Links</h3>
            <div className="icons-btn">
              <div className="social-btn"><TwitterIcon className="social-icon" id="twitter" /></div>
              <div className="social-btn"><InstagramIcon className="social-icon" id="instagram" /></div>
              <div className="social-btn"><FacebookOutlinedIcon className="social-icon" id="facebook" /></div>
              <div className="social-btn"><WhatsAppIcon className="social-icon" id="whatsapp" /></div>
              {/* <div className="social-btn"><LinkedInIcon className="social-icon" id="linkedin" /></div> */}
              <div className="social-btn"><YouTubeIcon className="social-icon" id="youtube" /></div>
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
