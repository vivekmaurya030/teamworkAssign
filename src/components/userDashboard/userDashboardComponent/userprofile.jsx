import React, { useEffect, useState } from "react";
import "./userProfile.scss";
import { apiGETCall1 } from "../../../utilities/site-apis";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import EditIcon from '@mui/icons-material/Edit';
import  statesList  from "../../../utilities/helpers/stateName"
import dateFormat from 'dateformat';
import moment from "moment/moment";
import Loader from '../../loader/loader'

const UserProfile = () => {
  var userDetails = JSON.parse(localStorage.getItem("userDetails"));
  var [usersData, setUsersData] = useState([]);
  const [loader,setLoader] = useState(true)
  const handleEdit = () => {
    setEdit(!edit);
    
  };
  const [serviceData,setServiceData]=useState([])
  const [edit, setEdit] = useState(true);
  useEffect(() => {
    // console.log("isServiceEmpty is ", isServiceEmpty);
    // alert(userDetails?.data?.userId)
    
    if(userDetails?.data?.userId) {
      apiGETCall1("https://backend-klara.onrender.com/api/v1/user",{id:userDetails?.data?.userId} ).then(
      (res) => {
        console.log("response is ", res);
          setServiceData(res.data.data.response)
          console.log(res.data.data.response,"fkodf");
          setLoader(false)
      }
      
    );
    }
    console.log(userDetails?.data?.userId,"fkdofs")
  }, []);

  const TextFieldStyle = {
    margin: " 0",
    "&:hover fieldset": {
      boxShadow: "0px 5px 5px #4B006E",
      outline: "none",
      border: "none",
    },
    "&:focus-within fieldset, &:focus-visible fieldset, &:active fieldset": {
      border: "1px solid #4B006E!important",
      boxShadow: "0px 5px 5px #4B006E",
    },
    "& .MuiInputBase-root": {
        // height: 40
    }
  };
  // For handling style for state list
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <>
    {
      loader ? <Loader/> : <div className="userProfile">
      <div className="profile-img">
        <img
          src="https://ionicframework.com/docs/img/demos/avatar.svg"
          alt=""
        />
        {/* <div className="profile-edit-btn">
            <button className="edit" onClick={handleEdit}
            style={{background: edit ? "":"white"}}><h5><EditIcon style={{fontSize:".8rem"}} />&nbsp;Edit</h5></button>
          </div> */}
      </div>
      {serviceData.map((item)=>(
        <div className="profile-body">
        <div className="profile-detail">
          
          <div className="detail-head">
            <h4>Name:</h4>
          </div>
          <div className="detail-input">
            <TextField
              className="textField"
              id="email"
              //   label="Email Id :"
              placeholder="Enter your email"
              disabled={true}
              value={item?.profile?.fullName}
              fullWidth={true}
              type="email"
              //   onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={edit ? null:TextFieldStyle}
            />
          </div>
        </div>
        {/* <div className="profile-detail">
          <div className="detail-head">
            <h4>Last Name:</h4>
          </div>
          <div className="detail-input">
          <TextField
              className="textField"
              id="email"
              //   label="Email Id :"
              placeholder="Enter your email"
              disabled={edit ? "true" : ""}
            //   value={"rakses"}
              fullWidth={true}
              type="email"
              //   onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={edit ? null:TextFieldStyle}
            />
          </div>
        </div> */}
        <div className="profile-detail">
          <div className="detail-head">
            <h4>Email Id:</h4>
          </div>
          <div className="detail-input">
            <TextField
              className="textField"
              id="email"
              //   label="Email Id :"
              placeholder="Enter your email"
              disabled={edit ? "true" : ""}
              value={item?.email}
              fullWidth={true}
              type="email"
              //   onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={edit ? null:TextFieldStyle}
            />
          </div>
        </div>
        <div className="profile-detail">
          <div className="detail-head">
            <h4>Mobile(Work):</h4>
          </div>
          <div className="detail-input">
            <TextField
              className="textField"
              id="email"
              //   label="Email Id :"
              placeholder="Enter your email"
              disabled={edit ? "true" : ""}
              value={item?.phone.work}
              fullWidth={true}
              type="email"
              //   onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={edit ? null:TextFieldStyle}
            />
          </div>
        </div>
        <div className="profile-detail">
          <div className="detail-head">
            <h4>Mobile(Personal):</h4>
          </div>
          <div className="detail-input">
            <TextField
              className="textField"
              id="email"
              //   label="Email Id :"
              placeholder="Enter your email"
              disabled={edit ? "true" : ""}
              value={item?.phone?.mobile}
              fullWidth={true}
              type="email"
              //   onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={edit ? null:TextFieldStyle}
            />
          </div>
        </div>
        {/* <div className="profile-detail">
          <div className="detail-head">
            <h4>Gender:</h4>
          </div>
          <div className="detail-input">
          <FormControl fullWidth sx={edit ? null:TextFieldStyle}>
                <Select
                  labelId="gender"
                  disabled={edit ? "true" : ""}
                  id="gender"
                  // value="{age}"
                //   label="Gender"
                //   onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value === 'male' ? 'Male': 'Female' }))}
                  // onChange={handleChange}
                >
                  <MenuItem value={} disabled>
                    Select Gender
                  </MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
          </div>
        </div> */}
        <div className="profile-detail">
          <div className="detail-head">
            <h4>City</h4>
          </div>
          <div className="detail-input">
            <TextField
              className="textField"
              id="email"
              //   label="Email Id :"
              placeholder="Enter your email"
              disabled={edit ? "true" : ""}
              value={item?.address?.city}
              fullWidth={true}
              type="email"
              //   onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={edit ? null:TextFieldStyle}
            />
          </div>
        </div>
        <div className="profile-detail">
          <div className="detail-head">
            <h4>Country:</h4>
          </div>
          <div className="detail-input">
            <TextField
              className="textField"
              id="email"
              value={"India"}
              disabled
              //   label="Email Id :"
              placeholder="Enter your email"
            //   value={"rakses"}
              fullWidth={true}
              type="email"
              //   onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={edit ? null:TextFieldStyle}
            />
          </div>
        </div>
        <div className="profile-detail">
          <div className="detail-head">
            <h4>State:</h4>
          </div>
          <div className="detail-input">
          <TextField
              className="textField"
              id="email"
              disabled
              //   label="Email Id :"
              // placeholder="Enter your email"
              value= {item?.address?.state}
              fullWidth={true}
              type="email"
              //   onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={edit ? null:TextFieldStyle}
              />
          </div>
        </div>
        <div className="profile-detail">
          <div className="detail-head">
            <h4>Pincode:</h4>
          </div>
          <div className="detail-input">
            <TextField
              className="textField"
              id="email"
              //   label="Email Id :"
              // placeholder="Enter your email"
              disabled={edit ? "true" : ""}
              value={item?.address?.pincode}
              fullWidth={true}
              type="email"
              //   onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={edit ? null:TextFieldStyle}
            />
          </div>
        </div>
        <div className="profile-detail">
          <div className="detail-head">
            <h4>Date of Birth:</h4>
          </div>
          <div className="detail-input">
          {/* <LocalizationProvider
                dateAdapter={AdapterDayjs}
              >
                <DemoContainer components={["DatePicker"]} >
                  <DatePicker
                    // label="Date Of Birth"
                    slotProps={{ textField: { fullWidth: true}}}
                    sx={TextFieldStyle}
                    disableFuture
                    defaultValue={item?.profile?.dob}                    
                    disabled={edit ? "true":""}
                    // onChange={(e) => setUserData((prev) => ({ ...prev, dob: moment(e.$d).format() }))}
                    // onChange={(e) => console.log("edefbgr is ", moment(e.$d).format())}
                  />
                </DemoContainer>
              </LocalizationProvider> */}
              <TextField
              className="textField"
              id="email"
              //   label="Email Id :"
              // placeholder="Enter your email"
              disabled={edit ? "true" : ""}
              value={dateFormat(item?.profile?.dob,"dS mmmm yyyy")}
              fullWidth={true}
              type="email"
              //   onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={edit ? null:TextFieldStyle}
            />
          </div>
        </div>
      </div>
      ))}
      {/* <div className="profile-bottom">
        <button className="update-btn" disabled={edit ? "false":""}>Update</button>
      </div> */}
    </div>
    }
    </>
  );
};

export default UserProfile;
