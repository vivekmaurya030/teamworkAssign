import React, { useState } from "react";
import human from "./img/human.png";
import callGuy from "./img/callPerson.png";
import "./faqs.scss";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const Faqs = () => {
  const faqData = [
    {
      id: 1,
      ques: "What services do you offer?",
      ans: "We offer a wide range of cleaning services,including residential cleaning,deep clening,move-in/out cleaning,and more.Please contact us to learn more about our services.",
    },
    {
      id: 2,
      ques: "Do you provide your own cleaning supplies and equipment?",
      ans: "Yes, we provide our own cleaning supplies and equipment. However, if you prefer us to use specific products, please let us know in advance",
    },
    {
      id: 3,
      ques: "What is included in a standard cleaning service?",
      ans: "Our standard cleaning service includes dusting, vacuuming, mopping, cleaning bathrooms, and kitchens, as well as making beds and tidying up.",
    },
    {
      id: 4,
      ques: "Are your cleaners background checked and insured?",
      ans: "Yes, all of our cleaners are background checked and insured for your peace of mind.",
    },
    {
      id: 5,
      ques: "How do you price your services?",
      ans: "Our pricing is based on the size of the space, the frequency of cleaning, and the scope of work. We offer competitive and transparent pricing with no hidden fees.",
    },
    {
      id: 6,
      ques: "Do you offer a satisfaction guarantee?",
      ans: "Yes, we offer a satisfaction guarantee. If you are not satisfied with our service, we will make it right.",
    },
    {
      id: 7,
      ques: "Can I schedule a cleaning for a specific day and time?",
      ans: "Yes, you can schedule a cleaning for a specific day and time that works best for you.",
    },
    {
      id: 8,
      ques: "Can I request specific cleaners for my cleaning appointments?",
      ans: "Yes, you can request specific cleaners for your cleaning appointments, subject to availability.",
    },
    {
      id: 9,
      ques: "What is your cancellation policy?",
      ans: "We require at least 24 hours notice for cancellation.If you cancel less than 24 hours in advance, a cancellation fee may apply.",
    },
    {
      id: 10,
      ques: "How do I make payment for your services?",
      ans: "We accept payment by credit card or check.Payment is due at the time of service.",
    },
    {
      id: 11,
      ques: "Can you clean carpets and upholstery? If so, do you charge extra for that service?",
      ans: "Yes, we offer carpet and upholstery cleaning services. We charge an additional fee for these services, which varies based on the size of the space and the scope of work. Please contact us to learn more.",
    },
    {
      id: 12,
      ques: "Can you clean during office hours or after hours?",
      ans: "Yes,we can clean during office hours or after hours,depending on your preference.",
    },
    {
      id: 13,
      ques: "What happens if something is damaged or broken during the cleaning process?",
      ans: "We take full responsibility for any damage or breakage that may occur during the cleaning process. We are fully insured and will work with you to resolve the issue promptly.",
    },
  ];
  const [viewAns, setViewAns] = useState(false);
  const handleAns = () => {
    setViewAns(!viewAns);
  };
  return (
    <>
      <div
        className="faqheader"
        style={{
          backgroundImage: `linear-gradient(rgb(75, 0, 110,.6),rgba(0,0,0,0.6)),url("https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <h1>Frequently Asked Questions</h1>
        {/* <div className="searchbar">
          <input type="text" placeholder="How can we help you?" />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div> */}
      </div>
      <section id="content">
        {faqData.map((item) => (
          <div className="faq-container">
            <Accordion style={{background:"#4b006e9d",color:"white",boxShadow:"0px 0px 10px #4b006e"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
                aria-controls="panel2a-content"
                id="panel2a-header"                
              >
                <Typography >{item.ques}</Typography>
              </AccordionSummary>
              <AccordionDetails style={{background:"white",color:"#4b006e"}}>
                <Typography>
                 {item.ans}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </section>
      <div className="contactus">
        <div className="callguy">
          <img src={callGuy} alt="icon" />
        </div>
        <div className="text">
          <h1>Contact us for more!</h1>
          <h3>
            Call us right now at <br />
            <a href="tel:+919876543210">+91-987-654-3210</a>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Faqs;
