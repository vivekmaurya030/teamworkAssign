import React, { useState ,useEffect} from "react";
import './admin.scss'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
const Adminhead =(prop)=>{
  const [isDivVisible, setIsDivVisible] = useState(false);
  

  const handleClick = () => {
    setIsDivVisible(!isDivVisible);
    // console.log(userDetails);
  };
var userDetails = JSON.parse(localStorage.getItem("userDetails"))

  // useEffect(() => {
  //   window.addEventListener('popstate', (e) => {
  //     window.history.go(1);
  //   });
  // }, []);
  const handleLogout =() => {
    localStorage.clear()
    }
    return(
        <div className="admin-head">
        <div className="logo">
          <h1>KLARA MOON</h1>
          <p>
            Cleaning Service Providing&nbsp;<span className="cmp">Company</span>
          </p>
        </div>
        <div className="title">
          <h1>{prop.title}</h1>
        </div>
        <div className="avatar"  onClick={handleClick} >
          <div className="avatar-body">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
            style={{ height: "40px", width: "40px", borderRadius: "50%" }}
            
          />
          <p>{userDetails?.data?.email}</p>
          <ArrowDropDownOutlinedIcon  />

          </div>
          <div className="avatar-dropdown" style={{display: isDivVisible? "":"none"}}>
            <ul>
              <Link to="/" style={{color:"white"}}><li onClick={handleLogout}><LogoutIcon className="dropdown-icon"/>Logout</li></Link>
            </ul>
          </div>
        </div>
      </div>
    )
}
export default Adminhead;