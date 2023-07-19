import React,{useState} from "react";
import './newadmin.scss'
import Adminhead from "./adminHead";
import "./sidebar.scss"
import User from "./admin_component/user";
import Employee from "./admin_component/employee";
import UpdateUser from "./admin_component/updateUser";
import Analytics from "./admin_component/analytics";
import Notification from "../notification/notification";
import { Link } from "react-router-dom";
const NewAdmin=(prop)=>{
    const [active,setActive]=useState("userList")

     const handleActive=(item)=>{
        setActive(item)
    }   
    const componentMap = {
        userList: <User />,
        employee: <Employee/>,
        // updateUser: <UpdateUser />,
        // analytics: <Analytics />,
        notification: <Notification />
      };
    return (
        <div className="newadmin">
            <div className="newadmin-head">
                <Adminhead title="Admin DashBoard"/>
            </div>
            <div className="newadmin-body">
                <div className="sidebarnav">
                <div className="sidebar">
            {/* <div className="admin-search">
                <input type="search" name="admin-search" id="admin-search" placeholder="Search........" className="nav-search" />
            </div> */}
            <div className="logo"><h3>KLARA MOON</h3></div>
            <div className="nav">
            <li className={active === 'userList' ? 'active' : ''} onClick={() => handleActive('userList')}>User List</li>
            <li className={active === 'employee' ? 'active' : ''} onClick={() => handleActive('employee')}>Employee</li>
            {/* <li className={active === 'updateUser' ? 'active' : ''} onClick={() => handleActive('updateUser')}>Update User</li> */}
            {/* <li className={active === 'analytics' ? 'active' : ''} onClick={() => handleActive('analytics')}>Analytics</li> */}
            <li className={active === 'notification' ? 'active' : ''} onClick={() => handleActive('notification')}>Notification</li>
            <Link to="/contactPage"><li className={active === 'contactUs' ? 'active' : ''} onClick={() => handleActive('contactUs')}>Contact Us</li></Link>

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
export default NewAdmin;