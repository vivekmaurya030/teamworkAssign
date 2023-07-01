import React from "react";
// import { ReactDOM } from "react";
import klaralogo from './images/klaralogo.png';
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export default function Header(){
    console.log("efnrenf", JSON.parse(localStorage.getItem("userDetails")));
    // localStorage.clear("userDetails")
    var userDetails = JSON.parse(localStorage.getItem("userDetails"))
  // useEffect(() => {
  //   window.addEventListener('popstate', (e) => {
  //     window.history.go(1);
  //   });
  // }, []);
  const handleDashboard=(item)=>{
    console.log("userDetails is ", userDetails);
    if (userDetails?.data?.roles[0] == ["organisationAdmin"]  ) {
      item="/NewAdmin"
      return item;
    }
    else 
      item ="/UserDashboardPage"
      return item
  }
    
    return(
    <div className="header">
        <div className="logo">
            <div className="logo-img">
                <img src={klaralogo} alt="" />
            </div>
            <div className="logo-head">
            <h2>KLARA MOON</h2>
          <h6>
            cleaning service providing&nbsp;<span className="cmpy">Company</span>
          </h6>
            </div>

        </div>
        <nav className="menu"> 
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/ProductOrderPage">PRODUCTS</Link></li>
                <li><Link to="/">REVIEWS</Link></li>
                <li><Link to="/FAQs">FAQS</Link></li>
                <li><Link to="/">BLOG</Link></li>
                {/* <li><Link to="/NewAdmin">ADMIN</Link></li> */}
                {userDetails ? <Link to="/notification"><NotificationsNoneOutlinedIcon className="userIcon"/></Link> : ""}
                {userDetails ?  <Link to={handleDashboard()}><PersonOutlineOutlinedIcon className="userIcon"/></Link>: <li><Link to="/LogInPage">LOGIN / SIGN UP</Link></li>}
            </ul>
            
        </nav>
    </div>
    )
}



