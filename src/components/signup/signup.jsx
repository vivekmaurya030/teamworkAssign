import React, { useState } from "react";
import "./signup.scss";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import image from './img/image.png'
import  statesList  from "../../utilities/helpers/stateName"
import moment from "moment"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Redux/AuthRedux"



const SignUp = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const TextFieldStyle = {
    margin: "1vh 0",
    "&:hover fieldset": {
      boxShadow: "0px 5px 5px #4B006E",
      outline: "none",
      border: "none",
    },
    "&:focus-within fieldset, &:focus-visible fieldset, &:active fieldset": {
      border: "1px solid #4B006E!important",
      boxShadow: "0px 5px 5px #4B006E",
    },
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
  
  const CheckBoxStyle={
    color: "#4B006E",
    '&.Mui-checked': {
      color: "#4B006E",
    },
    borderRadius: "4px",
    
  }


  // console.log("userData is ------------->", userData);

  // const checkPassword = () => {
  //   if (userData.password != userData.reEnteredPassword) {
  //     return false;
  //   }
  //   else {
  //     return true
  //   }
  // }
 
  // For handling checkboxes


//  console.log("checkPassword is ------>", checkPassword);

  const [states, setState] = useState('');
  const [userData, setUserData] = useState({
    email: "",
    fullName: "",
    userName: "",
    password: "",
    reEnteredPassword: "",
    phone: "",
    mobile: "",
    gender: "",
    state: "",
    city: "",
    pinCode: "",
    dob: "",
    isNewsLetter: false,
    isAggrement: false,
    isInformation: false
  });
  console.log("userData is ------------->", userData);

  const checkPassword = () => {
    if (userData.password != userData.reEnteredPassword) {
      return false;
    }
    else {
      return true
    }
  }
 
  // For handling checkboxes

  const [redirect,setRedirect]=useState(false)

  const handleSubmit = () => {
    if(!userData.isAggrement || !userData.isInformation || !userData.isNewsLetter) {
      alert("Please check all fields");
      setRedirect(true)
      return;
    };

    
    const prepareObj = {
       email: userData?.email,
       phone: {
        work: userData.mobile,
        mobile: userData.phone
       },
       password: userData.password,
       profile: {
        username: userData.userName,
        fullName: userData.fullName,
        dob: userData.dob
       },
       address: {
        country: "India",
        city: userData.city,
        state: userData.state,
        pincode: userData.pinCode
       },
       isNewsLetter: userData.isNewsLetter,
       isAggrement: userData.isAggrement,
       isInformation: userData.isInformation
    };
    dispatch(registerUser(prepareObj)).then((err) => {
      console.log("error is ----->", err);
      if(err.error.message != "Rejected") {
        navigate("/") 
      }
    })
  }
//  console.log("checkPassword is ------>", checkPassword);

  return (
    <div className="signup">
      <div className="signup-col1">
        <div className="signup-form">
          <div className="signup-header">
            <h1>KLARA MOON</h1>
            <p>
              cleaning service providing&nbsp;<p className="cmp">Company</p>
            </p>
          </div>
          <div className="signup-form-body">
            <TextField
              className="textField"
              id="email"
              label="Email Id :"
              placeholder="Enter your email"
              fullWidth={true}
              type="email"
              onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={TextFieldStyle}
            />

            <TextField
              className="textField"
              id="name"
              label="Name :"
              placeholder="Enter your full name"
              fullWidth={true}
              type="text"
              sx={TextFieldStyle}
              onChange={(e) => setUserData((prev) => ({ ...prev, fullName: e.target.value }))}
            />

            <TextField
              className="textField"
              id="name"
              label="Username :"
              placeholder="Enter UserName"
              fullWidth={true}
              type="text"
              sx={TextFieldStyle}
              onChange={(e) => setUserData((prev) => ({ ...prev, userName: e.target.value }))}
            />

            <TextField
              className="textField"
              id="pswrd"
              label="Password :"
              placeholder="XXXXXXXXXX"
              fullWidth={true}
              type="password"
              sx={TextFieldStyle}
              onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
            />

            <TextField
              // className="textField"
              id="confirm-pswrd"
              label="Confirm Password :"
              placeholder="XXXXXXXXXX"
              fullWidth={true}
              type="password"
              sx={TextFieldStyle}
              // will change classname accordingly
              // {
              //   ...checkPassword() ? null : alert("password mismatched")
              // }
              className= "error"
              onChange={(e) => setUserData((prev) => ({ ...prev, reEnteredPassword: e.target.value }))}
            />

            <div className="number">
              <div className="phone">
                <TextField
                  className="textField"
                  id="phone"
                  label="Phone :"
                  placeholder="XXX-XXX-XXXX"
                  fullWidth={true}
                  type="text"
                  sx={TextFieldStyle}
                  onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              <div className="mobile">
                <TextField
                  className="textField"
                  id="mobile"
                  label="Mobile :"
                  placeholder="XXX-XXX-XXXX"
                  fullWidth={true}
                  type="text"
                  sx={TextFieldStyle}
                  onChange={(e) => setUserData((prev) => ({ ...prev, mobile: e.target.value }))}
                />

              </div>

            </div>

            <div>
              <FormControl fullWidth sx={TextFieldStyle}>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  labelId="gender"
                  id="gender"
                  // value="{age}"
                  label="Gender"
                  onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value === 'male' ? 'Male': 'Female' }))}
                  // onChange={handleChange}
                >
                  <MenuItem value="" disabled>
                    Select Gender
                  </MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* <div>
              <FormControl fullWidth sx={TextFieldStyle}>
                <InputLabel id="country-name">Country</InputLabel>
                <Select
                  labelId="country-name"
                  id="country-name"
                  // value="{age}
                  label="country"
                  // onChange={handleChange}
                >
                  <MenuItem value="" disabled>
                    Select Country
                  </MenuItem>
                </Select>
              </FormControl>
            </div> */}
            <div>
              <FormControl fullWidth sx={TextFieldStyle}>
                <InputLabel id="state-name">
                  State
                </InputLabel>
                <Select
                  MenuProps={MenuProps}
                  className="select-state"
                  labelId="state-name"
                  id="state-name"
                  
                  // value="{age}"
                  // sx={TextFieldStyle}
                  label="State"
                  onChange={(e) => setUserData((prev) => ({ ...prev, state: e.target.value }))}
                  // onChange={handleChange}
                >
                {
                    statesList.map((item,index)=>(
                        <MenuItem value= {item}>{item}</MenuItem>
                  ))
                }
                    {/* Select Country
                    Country */}
                </Select>
              </FormControl>
            </div>
            <div>
            <TextField
              className="textField"
              id="name"
              label="City :"
              placeholder="Enter your city name"
              fullWidth={true}
              type="text"
              sx={TextFieldStyle}
              onChange={(e) => setUserData((prev) => ({ ...prev, city: e.target.value }))}
            />
            </div>
            <div className="pincode">
              <TextField
                className="textField"
                id="pincode"
                label="Pin Code :"
                placeholder="Enter your pincode"
                fullWidth={true}
                type="text"
                sx={TextFieldStyle}
                onChange={(e) => setUserData((prev) => ({ ...prev, pinCode: e.target.value }))}
              />
            </div>
            <div className="dob">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
              >
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Date Of Birth"
                    slotProps={{ textField: { fullWidth: true } }}
                    sx={TextFieldStyle}
                    disableFuture
                    onChange={(e) => setUserData((prev) => ({ ...prev, dob: moment(e.$d).format() }))}
                    // onChange={(e) => console.log("edefbgr is ", moment(e.$d).format())}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="approval">
              <div className="checkbox">
                <FormControlLabel
                  required
                  control={<Checkbox sx={CheckBoxStyle} />}
                  onChange={(e) => setUserData((prev) =>  ({...prev, isNewsLetter: !userData.isNewsLetter}) )}
                  label="Sign Up for newsletter"
           
                />
              </div>
              <div className="checkbox terms">
                <FormControlLabel
                  required
                  control={<Checkbox sx={CheckBoxStyle} />}
                  onChange={(e) => setUserData((prev) =>  ({...prev, isAggrement: !userData.isAggrement}) )}
                  label="Agreement to use KLARA Moon store"
                />{" "}
                <span>
                  <Link
                    style={{
                      color: "#B199CF",
                      fontFamily: "poppins,sans-serif",
                      fontWeight: 400,
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Terms
                  </Link>
                </span>{" "}
              </div>
              <div className="checkbox terms">
                <FormControlLabel
                  required
                  sx={{'&.label':{
                    textShadow:"0px 1px 1px grey"
                  }}}
                  control={<Checkbox sx={CheckBoxStyle} />}
                  onChange={(e) => setUserData((prev) =>  ({...prev, isInformation: !userData.isInformation}) )}
                  // onChange={(e) => console.log(e.target.value)}
                  label="Agreement for collection or utilization of information"
                />{" "}
                <span>
                  <Link
                    style={{
                      color: "#B199CF",
                      fontFamily: "poppins,sans-serif",
                      fontWeight: 400,
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Terms
                  </Link>
                </span>{" "}
              </div>
            </div>
            <div className="signup-btn-row">
                  <Link to= {redirect ? "/LogInPage":""} ><button type="button" className="login-btn signupbtn" onClick={handleSubmit}>Signup Now </button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="signup-col2">
        <img
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default SignUp;
