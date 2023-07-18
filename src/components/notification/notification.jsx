import React, { useEffect, useState } from "react";
import './notification.scss'
import { getNotification, updateNotification } from "../../Redux/orderRedux"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ViewOrderDetail from '../viewOrderDetail/viewOrderDetail'

const Notification =()=>{
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const [services, setServices] = useState([""])
    const [allCount, setAllCount] = useState()
    const [acceptCount, setAcceptCount] = useState()
    const [rejectCount, setRejectCount] = useState()
    const [rejectToggle, setRejectToggle] = useState(false)
    const [acceptToggle, setAcceptToggle] = useState(false)


    const combinedReduxNotification = useSelector((state) => state.order.notificationList);
    console.log("combinedReduxNotification is ", combinedReduxNotification);

  
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

    useEffect(() => {
        // localStorage.clear()
        dispatch(getNotification({}))
        console.log("combinedReduxNotification is ", combinedReduxNotification);
    }, [acceptToggle, rejectToggle]);

    useEffect(() => {
        if(combinedReduxNotification.data?.length > 0) {
            let rejectCount = 0 
            let acceptCount = 0
            for (let obj of combinedReduxNotification.data) {
                if(obj.status === "accepted") {
                    ++acceptCount
                }
                else if(obj.status === "rejected") {
                    ++rejectCount
                }

            }
            setAcceptCount(acceptCount);
            setRejectCount(rejectCount);
        }
    }, [combinedReduxNotification])
    const handleAccept = async (event, item) => {
        if(!acceptToggle) {
            let updateObj = {
                id: item._id,
                status: "accepted"
            }
            dispatch(updateNotification(updateObj)).then(() => {
                setAcceptToggle(true);
            })
        }
    };
    const handleViewDetail = async (event, item) => {
        // alert("view details called")
        console.log("item is ", item);
        navigate(`/ViewOrderDetailPage?id=${item._id}`)
    }

    const handleReject = async (event, item) => {

        if(!rejectToggle) {
            let updateObj = {
                id: item._id,
                status: "rejected"
            }
            dispatch(updateNotification(updateObj)).then(() => {
                setRejectToggle(true);
            })
        }
    }
    console.log("combinedReduxNotification is ", combinedReduxNotification);

    

    return(
        <div>
            <div className="notification">
           <div className="notification-head">
            <div className="noti-title">
                <h1>Notification</h1>
                <p>Mark all as read</p>
            </div>
            </div> 
            
            <div className="noti-nav">
                <ul>
                    <li>All({combinedReduxNotification?.count})</li>
                    <li>Accepted({acceptCount})</li>
                    <li>Rejected({rejectCount})</li>
                </ul>
            </div>
            <div className="noti-body">
                {
                    combinedReduxNotification.data?.length > 0 && combinedReduxNotification.data.map((item)=>(
                        <div className="noti-row">
                            <div className="noti-mesage">
                                <h5><b>{item?.userDetails?.profile?.fullName}</b>&nbsp;is requesting for <b> {item?.orderDetails?.service.map((service) => service.name + ", " )}</b></h5>
                            </div>
                            <div className="noti-action">
                                {
                                    item.status === 'accepted' || item.status === 'pending' ?                             
                                    <button className="noti-action-btn accept-btn" onClick={event => handleAccept(event, item)}>{item.status === 'accepted' ? "Accepted" : "Accept"}</button>
                                    : null
                                }
                                <button className="noti-action-btn viewdetail-btn" onClick={event => handleViewDetail(event, item)}>View Detail</button>
                                {
                                    item.status === 'rejected' || item.status === 'pending' ? 
                                    <button className="noti-action-btn reject-btn" onClick={event => handleReject(event, item)}>{item.status === 'rejected' ? "Rejected" : "Reject"}</button>
                                    : null
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    )
}

export default Notification;