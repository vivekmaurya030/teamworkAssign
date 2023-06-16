import React from "react";
import './admin.scss'

const Adminhead =()=>{
    return(
        <div className="admin-head">
        <div className="logo">
          <h1>KLARA MOON</h1>
          <p>
            cleaning service providing&nbsp;<span className="cmp">Company</span>
          </p>
        </div>
        <div className="title">
          <h1>Admin Dashboard</h1>
        </div>
        <div className="avatar">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
            style={{ height: "40px", width: "40px", borderRadius: "50%" }}
          />
          <p>admin.name@mail.com</p>
        </div>
      </div>
    )
}
export default Adminhead;