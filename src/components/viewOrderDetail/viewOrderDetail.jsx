import React from "react";
import  './viewOrderDetail.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";


const ViewOrderDetail =()=>{
    return(
        <div className="viewOrderDetail">
            <div className="viewOrderDetail-top">
                <div className="orderText">
                    <h4>Home Cleaning request from Poonam Pandey</h4>
                </div>
                <div className="orderBtn">
                    <button className="accept">Accept</button>
                    <button className="reject">Reject</button>
                </div>
            </div>
            <div className="viewOrderDetail-mid">
                <h1>Order Detail</h1>
            </div>
            <div className="viewOrderDetail-bottom">

                <div className="orderDetails">
                    <div className="OrderDetail-Back">
                        <Link to="/notification"><p><ArrowBackIcon />&nbsp;Go Back</p></Link>
                    </div>
                    <div className="orderDetail-row1">
                        <div><h1>Poonam Pandey</h1></div>
                        <div><h3>Order No. : 23456789</h3></div>
                    </div>
                    <div className="orderDetail-row2">
                        <div><h5>Date: 29/06/2023</h5></div>
                        <div><h5>Status: Pending</h5></div>
                        <div><h3>Order Price: ₹ 800</h3></div>
                    </div>
                    <div className="orderDetail-col">
                    <div className="orderDetail-row3">
                    <div className="row3-head">
                        <h2>Services</h2>
                    </div>
                        <div className="row3-services">
                            <h4>Toilet cleaning</h4>
                            <h4>₹ 400</h4>
                        </div>
                        <div className="row3-services">
                            <h4>Home cleaning</h4>
                            <h4>₹ 440</h4>
                        </div>
                    </div>
                    <div className="orderDetail-row4">
                        <div className="row4-head">
                            <h2>Address</h2>
                        </div>
                        <div className="row4-address">
                            <h5>234, Park Avenue, Raj Nagar, New Delhi, India</h5>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewOrderDetail;