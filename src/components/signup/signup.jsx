import React from "react";
import "./signup.scss";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SignUp = () => {
  const TextFieldStyle = {
    margin: "1.5vh 0",
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
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select Gender"
                sx={{...TextFieldStyle,}}
                // onChange={handleChange}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="signup-col2">
        {/* <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1685172427~exp=1685173027~hmac=5fcf86be6c0df98f5491a3e57c7153de5282a1c2a0444221d7cd58e2289ccb37" alt="" /> */}
      </div>
    </div>
  );
};

export default SignUp;
