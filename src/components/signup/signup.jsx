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
const SignUp = () => {
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

  const CheckBoxStyle={
    color: "#4B006E",
    '&.Mui-checked': {
      color: "#4B006E",
    },
    borderRadius: "4px",
    
  }

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
            />
            <TextField
              className="textField"
              id="pswrd"
              label="Password :"
              placeholder="XXXXXXXXXX"
              fullWidth={true}
              type="password"
              sx={TextFieldStyle}
            />
            <TextField
              className="textField"
              id="confirm-pswrd"
              label="Confirm Password :"
              placeholder="XXXXXXXXXX"
              fullWidth={true}
              type="password"
              sx={TextFieldStyle}
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
            <div>
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
            </div>
            <div>
              <FormControl fullWidth sx={TextFieldStyle}>
                <InputLabel id="state-name">
                  State
                </InputLabel>
                <Select
                  labelId="state-name"
                  id="state-name"
                  // value="{age}"
                  // sx={TextFieldStyle}
                  label="State"
                  // onChange={handleChange}
                >
                  <MenuItem value="" disabled>
                    Select Country
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl fullWidth sx={TextFieldStyle}>
                <InputLabel id="city-name">City</InputLabel>
                <Select
                  labelId="city-name"
                  id="city-name"
                  // value="{age}"
                  label="City"
                  // onChange={handleChange}
                >
                  <MenuItem value="" disabled>
                    Select City
                  </MenuItem>
                </Select>
              </FormControl>
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
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="approval">
              <div className="checkbox">
                <FormControlLabel
                  required
                  control={<Checkbox sx={CheckBoxStyle} />}
                  label="Sign Up for newsletter"
           
                />
              </div>
              <div className="checkbox terms">
                <FormControlLabel
                  required
                  control={<Checkbox sx={CheckBoxStyle} />}
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
                  control={<Checkbox sx={CheckBoxStyle}  />}
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
                  <Link><button type="button" className="login-btn signupbtn">Signup Now </button></Link>
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
