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
import  statesList  from "../../../utilities/helpers/stateName"

const UserProfile = () => {
  const handleEdit = () => {
    setEdit(!edit);
  };

  const [edit, setEdit] = useState(true);
  useEffect(() => {
    // console.log("isServiceEmpty is ", isServiceEmpty);
    apiGETCall1("http://localhost:3003/api/v1/user/createUser", "").then(
      (res) => {
        console.log("response is ", res);
        //   setServiceData(res.data.data.response)
      }
    );
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
    <div className="userProfile">
      <div className="profile-img">
        <img
          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
      <div className="profile-body">
        <div className="profile-detail">
          <div className="detail-head">
            <h4>First Name:</h4>
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
              sx={TextFieldStyle}
            />
          </div>
        </div>
        <div className="profile-detail">
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
              sx={TextFieldStyle}
            />
          </div>
        </div>
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
            //   value={"rakses"}
              fullWidth={true}
              type="email"
              //   onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={TextFieldStyle}
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
            //   value={"rakses"}
              fullWidth={true}
              type="email"
              //   onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={TextFieldStyle}
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
            //   value={"rakses"}
              fullWidth={true}
              type="email"
              //   onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={TextFieldStyle}
            />
          </div>
        </div>
        <div className="profile-detail">
          <div className="detail-head">
            <h4>Gender:</h4>
          </div>
          <div className="detail-input">
          <FormControl fullWidth sx={TextFieldStyle}>
                <Select
                  labelId="gender"
                  disabled={edit ? "true" : ""}
                  id="gender"
                  // value="{age}"
                //   label="Gender"
                //   onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value === 'male' ? 'Male': 'Female' }))}
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
        </div>
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
            //   value={"rakses"}
              fullWidth={true}
              type="email"
              //   onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={TextFieldStyle}
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
              sx={TextFieldStyle}
            />
          </div>
        </div>
        <div className="profile-detail">
          <div className="detail-head">
            <h4>State:</h4>
          </div>
          <div className="detail-input">
          <FormControl fullWidth sx={TextFieldStyle}>
                <Select
                  MenuProps={MenuProps}
                  className="select-state"
                  // labelId="state-name"
                  id="state-name"
                  disabled={edit ? "true" : ""}
                  // value="{age}"
                  label="State"
                  // onChange={(e) => setUserData((prev) => ({ ...prev, state: e.target.value }))}
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
              placeholder="Enter your email"
              disabled={edit ? "true" : ""}
            //   value={"rakses"}
              fullWidth={true}
              type="email"
              //   onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              sx={TextFieldStyle}
            />
          </div>
        </div>
        <div className="profile-detail">
          <div className="detail-head">
            <h4>Date of Birth:</h4>
          </div>
          <div className="detail-input">
          <LocalizationProvider
                dateAdapter={AdapterDayjs}
              >
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    // label="Date Of Birth"
                    slotProps={{ textField: { fullWidth: true}}}
                    sx={TextFieldStyle}
                    disableFuture
                    disabled={edit ? "true":""}
                    // onChange={(e) => setUserData((prev) => ({ ...prev, dob: moment(e.$d).format() }))}
                    // onChange={(e) => console.log("edefbgr is ", moment(e.$d).format())}
                  />
                </DemoContainer>
              </LocalizationProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
