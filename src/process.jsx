import React from "react";
import { ReactDOM } from "react";
import process1 from "./images/process1.png";
import process2 from "./images/process2.png";
import process3 from "./images/process3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Process() {
  return (
    <div className="processContainer">
      <div className="process-head">
        <h1>How Klara Cleaning Works</h1>
      </div>
      <div className="process-row">
        <div className="process-col">
          <div className="process-img">
            <img src={process1} alt="book" />
          </div>
          <div className="process-text">
            <span className="process-number">1</span>
            <h4>Book and Schedule</h4>
            <p>
              Booking an appointment is simple. Simply choose your preferred
              date, time and type of service in the left-hand field, then enter
              your details in the right hand box.
            </p>
          </div>
        </div>
        <div className="process-col-arrow">
          <FontAwesomeIcon icon={faCircleArrowRight} className="right-arrow" />
        </div>
        <div className="process-col">
          <div className="process-img">
            <img src={process2} alt="book" />
          </div>
          <div className="process-text">
            <span className="process-number">2</span>
            <h4>We Clean</h4>
            <p>
            All of our workers are well trained, and they do their work very carefully. 
            </p>
          </div>
        </div>
        <div className="process-col-arrow">
          <FontAwesomeIcon icon={faCircleArrowRight} className="right-arrow" />
        </div>
        <div className="process-col">
          <div className="process-img">
            <img src={process3} alt="book" />
          </div>
          <div className="process-text">
            <span className="process-number">3</span>
            <h4>Rate and Relax!</h4>
            <p>
            Please sit back and relax while our diligent workers clean and refresh your space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
