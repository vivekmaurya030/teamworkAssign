import React, { useEffect, useState } from "react";
import "./viewOrderDetail.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useParams } from "react-router-dom";
import { apiGETCall1 } from "../../utilities/site-apis";
import moment from "moment";
import Loader from "../loader/loader";

const ViewOrderDetail = () => {
  var [orderDetail, setOrderDetail] = useState([]);
  // const [services,setServices]=useState([])
  const [orderTotal, setOrderTotal] = useState(0);
  const [loader, setLoader] = useState(true);

  // useEffect(() => {
  //     if(orderDetail?.data?.orderDetails?.service?.price.length > 0) {
  //       let prices = 0
  //       for (let obj of prices) {
  //         prices += obj.price
  //       }
  //       setOrderTotal(prices)
  //     }

  //   }, [prices])
  const handlePriceTotal = async (item) => {
    let tempPrice = 0;
    for(let obj of item.orderDetails.service) {
      tempPrice = tempPrice + obj.price
    }
    
    setOrderTotal(tempPrice)

  }
  useEffect(() => {
    const url = window.location.href;
    const params = new URLSearchParams(url.split("?")[1]);
    const id = params.get("id");
    // console.log(params);
    apiGETCall1("https://backend-klara.onrender.com/api/v1/notification", { id: id }).then(
      (res) => {
        // console.log("fesg", res.data.data);
        handlePriceTotal(res.data.data.data[0])
        setLoader(false);
        // console.log("ordew rfwuieifbw e4f", res.data.data.data[0]);
        setOrderDetail(res.data.data);
        // console.log(orderDetail, "ek");
        // console.log(res.data.data);
      }
    );
    // console.log(orderTotal, "gsgsd");
  }, []);

  return (
    <>
    {
      loader ? <Loader/>:<div className="viewOrderDetail">
      <div className="viewOrderDetail-top">
        <div className="orderText">
          {orderDetail.data &&
            orderDetail.data.map((item) => (
              <h4>
                {item?.userDetails?.profile?.fullName} booked for&nbsp;
                {item?.orderDetails?.service?.map((ser, index) => (
                  <b>{ser.name},&nbsp;</b>
                ))}
              </h4>
            ))}
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
            <Link to="/notification">
              <p>
                <ArrowBackIcon />
                &nbsp;Go Back
              </p>
            </Link>
            {
              orderDetail.data &&
              orderDetail.data.map((item) => (
                <button disabled="disabled" className="status-btn"> {item?.status.toLowerCase().charAt(0).toUpperCase() +
                  item?.status.slice(1)}</button>
              ))
            }
          </div>
          <div className="orderDetail-row1">
            <div>
              {orderDetail.data &&
                orderDetail.data.map((item) => (
                  <h1>{item?.userDetails?.profile?.fullName}</h1>
                ))}
            </div>
            <div>
              {orderDetail.data &&
                orderDetail.data.map((item) => (
                  <h3>Order Id: <b>{item?.orderId}</b></h3>
                ))}
            </div>
          </div>
          <div className="orderDetail-row2">
            {orderDetail.data &&
              orderDetail.data.map((item) => (
                <div className="row3-row">
                  <h5>Date: {item?.orderDetails?.date}</h5>
                  <h3>Order Price: ₹&nbsp;{orderTotal}</h3>
                </div>
              ))}
          </div>
          <div className="orderDetail-col">
            <div className="orderDetail-row3">
              <div className="row3-head">
                <h2>Services</h2>
              </div>
              {orderDetail.data &&
                orderDetail.data.map((item) => (
                  <div className="row3-services">
                    {item?.orderDetails?.service?.map((ser, index) => (
                      <div className="ser-list">
                        <h4>{ser.name}&nbsp;</h4>
                        <h4>₹&nbsp;{ser.price}</h4>
                      </div>
                    ))}
                    {/* <h4>₹ 400</h4> */}
                  </div>
                ))}
            </div>
            <div className="orderDetail-row4">
              <div className="row4-head">
                <h2>Address</h2>
              </div>
              <div className="row4-address">
                {orderDetail.data && orderDetail.data.map((item)=>(
                    <h5>{item?.orderDetails?.address}</h5>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );
};

export default ViewOrderDetail;
