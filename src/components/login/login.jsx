import React from "react";
import "./login.scss";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const LogIn = () => {
  const TextFieldStyle={
      '&:hover fieldset':{
        boxShadow:"0px 5px 5px #4B006E",
        outline:"none",
        border:"none"
      },
      '&:focus-within fieldset, &:focus-visible fieldset, &:active fieldset':{
        border:"1px solid #4B006E!important",
        boxShadow:"0px 5px 5px #4B006E",
        

      }
  }
  return (
    <div className="login">
      <div className="login-box">
        <div className="login-header">
          <h1>KLARA MOON</h1>
          <p>
            cleaning service providing&nbsp;<p className="cmp">Company</p>
          </p>
        </div>
        <div className="login-body">
          <div className="textfield">
            <TextField
             className="textField"
              id="outlined-required"
              label="Email"
              placeholder="Enter your email"
              type="email"
              fullWidth={true}
              InputProps={{style:{color:"#4B006E"}}}
              defaultValue=""
              sx={TextFieldStyle}
            />
            <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
          <div className="textfield">
            <TextField
                className="textField"
              id="outlined-required"
              label="Password"
              placeholder="Enter your password"
                fullWidth={true}
              type="password"
              sx={TextFieldStyle}
            />
            <span className="icon"><FontAwesomeIcon icon={faLock} /></span>
            </div>
            <div className="forget-pass"><h6><Link to="/" id="forget-pass">Forget Password?</Link></h6></div>
            <div className="btn-box"><button className="btn login-btn">Login Now</button></div>
            <div className="or">
                <div className="blank"></div>
                <div className="or-text">OR</div>
                <div className="blank"></div>
            </div>
            <div className="btn-box"><Link to="/SignUpPage"><button className="btn signup-btn">Signup Now</button></Link></div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
