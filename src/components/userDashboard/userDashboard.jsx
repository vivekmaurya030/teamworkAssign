import React,{useState}from "react";
import Adminhead from "../admin/adminHead";
import UserProfile from "./userDashboardComponent/userprofile";

const UserDashboard =()=>{
    const [active,setActive]=useState("profile")

     const handleActive=(item)=>{
        setActive(item)
    }   
    const componentMap = {
        profile: <UserProfile />,
        // myOrders: <Employee/>,
        // myAddresses: <UpdateUser />,
        // contactUs: <Analytics />,
        // changePassword: <Notification />
      };

    return (
        <div className="newadmin">
            <div className="newadmin-head">
                <Adminhead title="DashBoard"/>
            </div>
            <div className="newadmin-body">
                <div className="sidebarnav">
                <div className="sidebar">
            <div className="nav">
            <li className={active === 'profile' ? 'active' : ''} onClick={() => handleActive('profile')}>Profile</li>
            <li className={active === 'myOrders' ? 'active' : ''} onClick={() => handleActive('myOrders')}>My Orders</li>
            <li className={active === 'myAddresses' ? 'active' : ''} onClick={() => handleActive('myAddresses')}>My Addresses</li>
            <li className={active === 'contactUs' ? 'active' : ''} onClick={() => handleActive('contactUs')}>Contact Us</li>
            <li className={active === 'changePassword' ? 'active' : ''} onClick={() => handleActive('changePassword')}>Change Password</li>

            </div>
        </div>
                </div>
                <div className="main">
                {componentMap[active]}
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;