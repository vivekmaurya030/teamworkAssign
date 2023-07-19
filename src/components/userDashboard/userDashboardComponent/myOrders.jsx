import React, { useEffect, useState } from "react";
import './myOrders.scss'
import Loader from "../../loader/loader";
import { apiGETCall1 } from "../../../utilities/site-apis";

const MyOrders=()=>{
    const [loader,setLoader]=useState(true)
    var userDetails = JSON.parse(localStorage.getItem("userDetails"))
    const [orderServices,setOrderServices]=useState([])
    useEffect(() => {
          apiGETCall1("https://backend-klara.onrender.com/api/v1/notification",{id:userDetails.data.userId}).then(
          (res) => {
            // console.log("response is ", res);
              console.log(res.data.data.data,"fkodf");
              setOrderServices(res.data.data.data);
              setLoader(false);
            //   console.log(userDetails.data.userId,"ghg");
            //   console.log();
          }
          
        );
      }, []);
    return (
        <>
        {loader ? <Loader />:
        <div className="myorders">
            <div className="orders">
                {
                    orderServices.map((item)=>(
                        item?.orderDetails?.addedBy==userDetails.data.userId &&
                        <h1>{item._id}</h1>
                    ))

                }
            </div>
        </div>
    }
        </>
    )
}

export default MyOrders;