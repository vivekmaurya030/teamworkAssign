/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import "./contact.scss";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {apiPostCall1} from '../../utilities/site-apis'


const Contact = () => {
  const TextFieldStyle = {
    margin: "1vh 0",
    "&:hover fieldset": {
      boxShadow: "0px 5px 5px #4B006E",
      outline: "none",
      border: "none",
    },
    "&:focus-within fieldset, &:focus-visible fieldset, &:active fieldset": {
      border: "1px solid #4B006E!important",
      boxShadow: "0px 5px 5px #4B006E",
    },
  };
  const CheckBoxStyle = {
    color: "#4B006E",
    "&.Mui-checked": {
      color: "#4B006E",
    },
    borderRadius: "4px",
  };
  const handleClick =()=>{
    apiPostCall1('https://backend-klara.onrender.com/api/v1/contactUs',contactData)
    // alert("We will contact you soon..........")
    clearField()
    
  }
  const clearField =()=>{
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
  }

  const [userContact,setContact]=useState({
    name:"",
    email:"",
    message:"",
  });
  
  const contactData={
    name:userContact.name,
    email:userContact.email,
    message:userContact.message,
  }
  return (
    <div className="contact">
      <div className="Contact-col1">
        <div className="col1-part1">
          <div className="contact-head">
            <h1>
              <span>Contact</span>&nbsp;<span className="head-color">Us</span>
            </h1>
          </div>
          <div className="contact-form">
            <div className="input">
              <TextField
                className="textField"
                id="name"
                label="Name :"
                placeholder="Enter your full name"
                fullWidth={true}
                onChange={(e) => setContact((prev) => ({ ...prev, name: e.target.value }))}
                type="text"
                sx={TextFieldStyle}
              />
            </div>
            <div className="input">
              <TextField
                className="textField"
                id="email"
                label="Email :"
                placeholder="Enter your email address"
                fullWidth={true}
                type="text"
                onChange={(e) => setContact((prev) => ({ ...prev, email: e.target.value }))}
                sx={TextFieldStyle}
              />
            </div>
            <div className="input">
              <TextField
                className="textField"
                id="message"
                label="Message :"
                placeholder="Type your message here.........."
                multiline
                rows={5}
                fullWidth={true}
                onChange={(e) => setContact((prev) => ({ ...prev, message: e.target.value }))}
                type="text"
                sx={TextFieldStyle}
              />
            </div>
            <div className="checkbox"></div>
            <FormControlLabel
              required
              sx={{
                "&.label": {
                  textShadow: "0px 1px 1px grey",
                },
              }}
              control={<Checkbox sx={CheckBoxStyle} defaultChecked/>}
              label="I Would like to receive the newsletter."
            />
          </div>
          <div className="submit">
            <button className="sub-btn" onClick={handleClick}>Submit</button>
          </div>
        </div>
        <div className="col1-part2">
          <div className="text">
            <p>
              Voluptatum quas dolorum suscipit tempore quibusdam nostrum sit
              veritatis aperiam, iure molestiae.
            </p>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.889215335134!2d83.3785947751204!3d26.747911176745813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39914487faa78c47%3A0x1d2e2872d3dd2c45!2sDeen%20Dayal%20Upadhyaya%20Gorakhpur%20University%2C%20Gorakhpur!5e0!3m2!1sen!2sin!4v1687289143511!5m2!1sen!2sin"
              width="400"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="box-over-map">
              <h3>Klara Moon</h3>
              <p>
                35 W 36th St. <br />
                NY 10018
              </p>
            </div>
          </div>
          <div className="info">
            <FmdGoodOutlinedIcon className="icons"/>
            <h3>NYC,United States</h3>
          </div>
          <div className="info">
            <CallOutlinedIcon className="icons"/>
            <h3>+91-987-654-4321</h3>
          </div>
          <div className="info">
            <EmailOutlinedIcon className="icons"/>
            <h3>klaramoon@mail.com</h3>
          </div>
        </div>
      </div>
      <div className="Contact-col2">
        <div className="col2-row">
          <h2>Contact</h2>
          <p>moonhelp@klara.com</p>
        </div>
        <div className="col2-row">
          <h2>Based in</h2>
          <p>Gorakhpur</p>
          <p>Uttar Pradesh, India`</p>
        </div>
        <div className="col2-row">
          <FacebookOutlinedIcon className="social-btn"/>
          <InstagramIcon className="social-btn"/>
          <TwitterIcon className="social-btn"/>

        </div>
      </div>
    </div>
  );
};

export default Contact;
