import React,{useState,useEffect}from "react";
import { apiGETCall1 } from "../../../utilities/site-apis";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import PhotoCameraFrontOutlinedIcon from "@mui/icons-material/PhotoCameraFrontOutlined";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Employee =()=>{
    var userDetails = JSON.parse(localStorage.getItem("userDetails"));
  var [employeeData, setEmployeeData] = useState([]);
  var [emplyeeData, setEmplyeeData] = useState([]);

   
  useEffect(() => {
    if (userDetails.data.roles[0]==["organisationAdmin"] || ["superAdmin"]) {
      apiGETCall1("http://localhost:3003/api/v1/user/?roles=organisationAdmin", "").then(
      (res) => {
        // console.log("response is ", res);
        setEmployeeData(res.data.data.response);
        // console.log(res.data.data.response,"user data");
        
        // console.log(usersData)
        
      })
    }
  }, [])
  useEffect(() => {
    // const emp = employeeData.filter(item => item.roles==="organisationAdmin"|| item.roles==="superAdmin");

        setEmplyeeData(employeeData.filter(item => item.roles==="organisationAdmin"|| item.roles==="superAdmin"))
  }, [])
  
  

    return(
        <div className="employee users" style={{height:"80vh"}}>
        <div className="user-head">
          <div className="user-title">
            <h1>Employees</h1>
            <p id="total-user">{emplyeeData.length} Employees</p>
          </div>
          <div className="user-search">
            <input
              type="search"
              name="employee-search"
              id="employee-search"
              placeholder="Search......"
            />
            <SearchOutlinedIcon className="search-icon" />
          </div>
          <div className="new">
            <button className="btn">
              <PersonAddOutlinedIcon />
              <h6>New Member</h6>
            </button>
          </div>
        </div>
        <div className="users-body">
        {/* {usersData.map((obj) => { */}
           {emplyeeData.map((item) => (
             <div className="user-row" key={item._id}>
              <div className="user-profile">
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
                  {/* <h4>{item.profile=(da)=>d.map(data => data.username)}</h4> */}
                  
                  <p>{item?.email}</p>
                </div>
              </div>
              <div className="user-id">
                <h5>{item.ID}</h5>
              </div>
              <div className="user-id">
                <h5>{item.roles }</h5>
              </div>
              <div className="user-mob">
                {/* <h5>{item.mobile}</h5> */}
              </div>
              <div className="user-state">
                {/* <h5>{item.state}</h5> */}
              </div>
              <div className="edit-btn">
                <div className="edit">
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
    )
}

export default Employee;