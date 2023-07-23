import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./user.scss";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Widget from "../widget";
import Top_purple from "../img/Top_purple.png";
import Top_pink from "../img/Top_pink.png";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import PhotoCameraFrontOutlinedIcon from "@mui/icons-material/PhotoCameraFrontOutlined";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { apiGETCall1 } from "../../../utilities/site-apis";
import Loader from "../../loader/loader";
import { Link, Navigate, useNavigate } from "react-router-dom";

const data = [
  {
    name: "Sanjay Balakrishnan",
    profile:
      "https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    email: "sanjay@bytive.com",
    id: "KM-T123456",
    mobile: "9876543210",
    state: "Bengaluru",
  },
  {
    name: "Sanjay Balakrishnan",
    profile:
      "https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    email: "sanjay@bytive.com",
    id: "KM-T123456",
    mobile: "9876543210",
    state: "Bengaluru",
  },
  {
    name: "Sanjay Balakrishnan",
    profile:
      "https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    email: "sanjay@bytive.com",
    id: "KM-T123486",
    mobile: "9876543210",
    state: "Bengaluru",
  },
  {
    name: "Sanjay Balakrishnan",
    profile:
      "https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    email: "sanjay@bytive.com",
    id: "KM-T123496",
    mobile: "9876543210",
    state: "Bengaluru",
  },
  {
    name: "Sanjay Balakrishnan",
    profile:
      "https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    email: "sanjay@bytive.com",
    id: "KM-T123056",
    mobile: "9876543210",
    state: "Bengaluru",
  },
  {
    name: "Sanjay Balakrishnan",
    profile:
      "https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    email: "sanjay@bytive.com",
    id: "KM-T123956",
    mobile: "9876543210",
    state: "Bengaluru",
  },
  {
    name: "Sanjay Balakrishnan",
    profile:
      "https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    email: "sanjay@bytive.com",
    id: "KM-T123056",
    mobile: "9876543210",
    state: "Bengaluru",
  },
  {
    name: "Sanjay Balakrishnan",
    profile:
      "https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    email: "sanjay@bytive.com",
    id: "KM-T123496",
    mobile: "9876543210",
    state: "Bengaluru",
  },
];


const User = () => {

  Navigate=useNavigate()
  const [loader, setLoader] = useState(true);
  var userDetails = JSON.parse(localStorage.getItem("userDetails"));
  var [usersData, setUsersData] = useState([]);

  useEffect(() => {
    if (userDetails.data.roles[0]==["organisationAdmin"] || ["superAdmin"]) {
      apiGETCall1("https://backend-klara.onrender.com/api/v1/user/?roles=organisationAdmin", "").then(
      (res) => {
        // console.log("response is ", res);
        setUsersData(res.data.data.response);
        // console.log(res.data.data.response,"user data");
        // console.log(usersData,"ekf");
        setLoader(false)
        // console.log(usersData)
      })
    }
  }, [])

  // const profiles= usersData.map(obj=> obj._id)
  // console.log(profiles,"profile");
   return (
    <>
    {
      loader ? <Loader/>:<div>
      {/* <div className="widget">
        <div className="box" style={{ marginLeft: "0" }}>
          <Widget
            bg={Top_purple}
            head="Analytics"
            icon1={<BarChartOutlinedIcon />}
            icon1Title="Subscriptions"
            icon2={<PermIdentityOutlinedIcon />}
            icon2Title="Permissions"
          />
        </div>
        <div className="box">
          <Widget
            bg={Top_pink}
            head="Users"
            icon1={<ContactPageOutlinedIcon />}
            icon1Title="CV Log"
            icon2={<PhotoCameraFrontOutlinedIcon />}
            icon2Title="Camera"
          />
        </div>
        <div className="box" style={{ marginRight: "0" }}>
          <Widget
            bg={Top_purple}
            head="Users"
            icon1={<BarChartOutlinedIcon />}
            icon1Title="Subscriptions"
            icon2={<PermIdentityOutlinedIcon />}
            icon2Title="Permissions"
          />
        </div>
      </div> */}
      <div className="users">
        <div className="user-head">
          <div className="user-title">
            <h1>Users</h1>
            <p id="total-user">{usersData.length} Users</p>
          </div>
          <div className="user-search">
            <input
              type="search"
              name="user-search"
              id="user-search"
              placeholder="Search......"
            />
            <SearchOutlinedIcon className="search-icon" />
          </div>
          <div className="new">
          <Link to="/SignUpPage">
            <button className="btn">
              <PersonAddOutlinedIcon />
              <h6>New Member</h6>
            </button></Link>
          </div>
          
        </div>
        <div className="users-body">
        {/* {usersData.map((obj) => { */}
           {usersData.map((item) => (
          item?.roles=="user" && <div className="user-row" key={item._id}>
              <div className="user-profile-name">
                <div
                  style={{
                    // background: `url(${item.profile})`,
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "0 0",
                  }}
                  className="profile"
                ></div>
                <div className="user-name">
                  <h4>{item?.profile?.fullName}</h4>
                  
                  <p>{item?.email}</p>
                </div>
              </div>
              <div className="user-profile">
                <h5>{item.ID}</h5>
              </div>
              <div className="user-profile">
                <h5>{item.roles }</h5>
              </div>
              <div className="user-profile">
                {/* <h5>{item.mobile}</h5> */}
              </div>
              <div className="user-profile">
                {/* <h5>{item.state}</h5> */}
              </div>
              <div className="edit-btn user-profile">
                <div className="edit" >
                  <RemoveRedEyeOutlinedIcon />
                </div>
                <div className="edit">
                  <ModeEditOutlineOutlinedIcon />
                </div>
                <div className="edit">
                  <DeleteOutlineOutlinedIcon />
                </div>
              </div>
            </div>
))} 
        </div>
      </div>
    </div>
    }
    </>
  );
};

export default User;
