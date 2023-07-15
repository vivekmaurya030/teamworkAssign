import React, { useEffect, useState } from "react";
import './notification.scss'
import { getNotification } from "../../Redux/orderRedux"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const Notification =()=>{
    const dispatch = useDispatch();
    const [services, setServices] = useState([""])
    const [allCount, setAllCount] = useState()
    const [acceptCount, setAcceptCount] = useState()

    const combinedReduxNotification = useSelector((state) => state.order.notificationList);
    console.log("combinedReduxNotification is ", combinedReduxNotification);
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

  
    // useEffect(() => {
    //     console.log("combinedReduxNotification.length is ", combinedReduxNotification.data.length);
    //     if(combinedReduxNotification.data.length > 0) {
    //         let tempString
    //         for (let obj of combinedReduxNotification.data) {
    //             console.log("obj.orderDetails.name is ", obj.orderDetails.name);
    //             tempString += obj.orderDetails.name
    //         }
    //         setServices(tempString)
    //     }
    //     console.log("services is ", services);
    // }, [combinedReduxNotification])
    useEffect(() => {
        // localStorage.clear()
        dispatch(getNotification({}))
        console.log("combinedReduxNotification is ", combinedReduxNotification);
    }, [])

    console.log("combinedReduxNotification is ", combinedReduxNotification);

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
                    combinedReduxNotification.data?.length > 0 && combinedReduxNotification.data.map((item)=>(
                        <div className="noti-row">
                            <div className="noti-mesage">
                                <h5>{item?.userDetails?.profile?.fullName}&nbsp;is requesting for {item?.orderDetails?.service.map((service) => service.name)}</h5>
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