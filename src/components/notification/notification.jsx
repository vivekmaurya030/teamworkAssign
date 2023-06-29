import React from "react";
import './notification.scss'

const Notification =()=>{
    const notiData=[
        {name:"Mony Singh", service:"Home CLeaning"},
        {name:"Disha Patani", service:"Home CLeaning"},
        {name:"Mouni Roy", service:"Carpet CLeaning"},
        {name:"Malaika Arora", service:"Furniture CLeaning"},
        {name:"Avneet Kaur", service:"Home CLeaning"},{name:"Mony Singh", service:"Home CLeaning"},
        {name:"Disha Patani", service:"Home CLeaning"},
        {name:"Mouni Roy", service:"Carpet CLeaning"},
        {name:"Malaika Arora", service:"Furniture CLeaning"},
        {name:"Avneet Kaur", service:"Home CLeaning"},{name:"Mony Singh", service:"Home CLeaning"},
        {name:"Disha Patani", service:"Home CLeaning"},
        {name:"Mouni Roy", service:"Carpet CLeaning"},
        {name:"Malaika Arora", service:"Furniture CLeaning"},
        {name:"Avneet Kaur", service:"Home CLeaning"},
    ]
    return(
        <div className="notification">
           <div className="notification-head">
            <div className="noti-title">
                <h1>Notification</h1>
                <p>Mark all as read</p>
            </div>
            </div> 
            <div className="noti-nav">
                <ul>
                    <li>All(1)</li>
                    <li>Accepted</li>
                    <li>Rejected</li>
                    <li>Archieved(5)</li>
                </ul>
            </div>
            <div className="noti-body">
                {
                    notiData.map((item)=>(
                        <div className="noti-row">
                            <div className="noti-mesage">
                                <h5>{item.name}&nbsp;is requesting for {item.service}</h5>
                            </div>
                            <div className="noti-action">
                                <button className="noti-action-btn accept-btn" >Accept</button>
                                <button className="noti-action-btn viewdetail-btn">View Detail</button>
                                <button className="noti-action-btn reject-btn">Reject</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Notification;