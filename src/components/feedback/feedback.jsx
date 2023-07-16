import React from "react";
import "./feedback.scss";
import feedbackimg from "./img/feedbackimg.png";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const labels = {
//   0.5: "Useless",
  1: "Useless",
//   1.5: "Poor",
  2: "Poor",
//   2.5: "Ok",
  3: "Good",
//   3.5: "Good",
  4: "Excellent",
//   4.5: "Excellent",
  5: "Outstanding",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const Feedback = () => {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);

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

  const CheckBoxStyle = {
    color: "#4B006E",
    "&.Mui-checked": {
      color: "#4B006E",
    },
    borderRadius: "4px",
  };

  return (
    <div className="feedback">
      <div className="col1">
        <div className="row1">
          <div className="dash"></div>
          <h4>RATE OUR SERVICES</h4>
        </div>
        <div className="row2">
          <h1>Fill the form to submit</h1>
          <h1>your feedback</h1>
        </div>
        <div className="row3">
          <p>
          We're always looking for ways to improve, we would really appreciate it if you could take a few minutes to fill out this feedback form. Your feedback will help us to better understand what you like and dislike about our services, and it will also help us to identify areas where we can improve.
          </p>
        </div>
        <div className="img">
          <img src={feedbackimg} alt="" />
        </div>
      </div>
      <div className="column2">
        <div className="feedbackcontainer">
          <div className="feedback-row">
            <div className="row1-row1">
              <h1>How was Our Cleaning Service?</h1>
            </div>
            <div className="row1-row2">
              <Box
                sx={{
                //   width: 200,
                  display: "flex",
                  justifyContent:"start",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={1}
                  getLabelText={getLabelText}
                  
                  sx={{
                    fontSize:"2.5rem",padding:"0 1rem"
                  }}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : value]}
                  </Box>
                )}
              </Box>
            </div>
          </div>
          <div className="feedback-row">
            <div className="row1-row1">
                <h2>Were you satisfied with our staff’s Cleaning Service and behavior?</h2>
            </div>
            <div className="row1-row2">
            <FormControl fullWidth sx={TextFieldStyle}>
                <Select
                  labelId="staisfaction"
                  id="satisfaction"
                  
                //   onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value === 'male' ? 'Male': 'Female' }))}
                  // onChange={handleChange}
                >
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
                
            </div>
          </div>
          <div className="feedback-row">
            <div className="row1-row1">
                <h2>Additional Feedback</h2>
            </div>
            <div className="row1-row2">
            <TextField
                className="textField"
                id="message"
                placeholder="If you have any additional feedback, please type it in here..."
                multiline
                rows={4}
                fullWidth={true}
                // onChange={(e) => setContact((prev) => ({ ...prev, message: e.target.value }))}
                type="text"
                sx={TextFieldStyle}
              />
            </div>
          </div>
          <div className="feedback-row">
          <FormControlLabel
              required
              sx={{
                "&.label": {
                  textShadow: "0px 1px 1px grey",
                },
              }}
              control={<Checkbox sx={CheckBoxStyle} />}
              label="I have read and accept the Privacy Policy."
            />
          </div>
          <div className="submit">
            <button className="sub-feedback-btn" >Submit Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
