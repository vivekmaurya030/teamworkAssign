import React, { useEffect, useState } from "react";
import "./productOrder.scss";
import imgproductOrder from "./img/imgproductOrder.png";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { apiGETCall1 } from "../../utilities/site-apis"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';
import Switch from "@mui/material/Switch";
import moment from "moment";
import { useDispatch } from "react-redux";

const ProductOrder = () => {
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

  const PetMenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };


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
  const toggleStyle = {
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "#4B006E",
      "&:hover": {
        backgroundColor: "none",
        boxShadow: "0px 0px 1px #B199CF",
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#4B006E",
    },
  };
  // const additem =()=>{
  //   const newItem =[serviceList];
    
  //   return newItem
  // }
  const [serviceData, setServiceData] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  // var serviceArr = serviceData.map((obj) => obj.name)
  // const [isServiceEmpty, setIsServiceEmpty] = useState(false);
  const handleServiceSelect = (event, value) => setServiceList(value);
  const dispatch = useDispatch();
  
  // setIsServiceEmpty(() => {
  //   if(serviceList.length === 0) {
  //     return false;
  //   }
  //   else {
  //     return true;
  //   }  
  // }); 


  useEffect(() => {
    // console.log("isServiceEmpty is ", isServiceEmpty);
     apiGETCall1("http://localhost:3003/api/v1/masterService", "").then((res) => {
      // console.log("response is ", res);
      setServiceData(res.data.data.response)  
     })
  }, []);
  // console.log("service dat ais ", serviceData);
  const [petList, setPetList] = useState([]);
  const handlePetSelect = (event, value) => setPetList(value)
  const petData=[
    "Dog",
    "Cat",
    "Monkey",
    "Cow",
    "Buffalo",
    "Parrot",
    "Hen",
    "Monitor Lizard",
    "Crocdile",
    "Alligator",
    "Fish",
  "Other"  ]

  const click=()=>{
    console.log(serviceData)
    console.log(petList)
    console.log(orderDetail)
    setPreview(!preview)
  }

  const [toggled, setToggled] = useState(false);
  const [pettoggled, setpetToggled] = useState(false);
  const [orderDetail, setOrderDetail] = useState({
    service: [],
    phone: "",
    dateTime: "",
    address: "",
    area: "",
    supplies: "0",
    pet: [],
    note: "",
  });


  const OrderData = {
    service: orderDetail.service,
    phone: orderDetail.phone,
    dateTime: orderDetail.dateTime,
    address: orderDetail.address,
    area: orderDetail.area,
    supplies: orderDetail.supplies,
    pet: orderDetail.pet,
    note: orderDetail.note,
  };
  const [preview,setPreview]=useState(false)

  return (
    <div className="productOrder">
      <div className="col1">
        <div className="row1">
          <div className="dash"></div>
          <h4>PLACE AN ORDER NOW</h4>
        </div>
        <div className="row2">
          <h1>Make Cleanliness a breeze.</h1>
          <h1>Schedule your serviceList today</h1>
        </div>
        <div className="row3">
          <p>
            Experience the bliss of a pristine sanctuary without lifting a
            finger. Book our premium cleaning serviceList now and indulge in the
            gift of a sparkling, stress-free home.
          </p>
        </div>
        <div className="img">
          <img src={imgproductOrder} alt="" />
        </div>
      </div>
      <div className="col2" style={{display: preview ? "none":""}}>
        <div className="orderContainer">
          <div className="col2-row1" style={{ display: "none " }}>
            <div className="row1-col1">
              <div className="inputHead">
                <h3>Name</h3>
              </div>
              <div className="input">
                <FormControl sx={TextFieldStyle} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    fullWidth
                    placeholder="Full name"
                    endAdornment={
                      <InputAdornment
                        position="end"
                        style={{ color: "#4B006E", padding: 0, margin: 0 }}
                      >
                        <PersonOutlinedIcon
                          style={{ fontSize: "2rem", margin: 0, padding: 0 }}
                        />
                      </InputAdornment>
                    }
                    label=""
                  />
                </FormControl>
              </div>
            </div>
            <div className="row1-col1">
              <div className="inputHead">
                <h3>Email</h3>
              </div>
              <div className="input">
                <FormControl sx={TextFieldStyle} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    fullWidth
                    placeholder="Email address"
                    endAdornment={
                      <InputAdornment
                        position="end"
                        style={{ color: "#4B006E", padding: 0, margin: 0 }}
                      >
                        <LocalPostOfficeOutlinedIcon
                          style={{ fontSize: "2rem", margin: 0, padding: 0 }}
                        />
                      </InputAdornment>
                    }
                    
                  />
                </FormControl>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="inputHead">
              <h3>Choose your service</h3>
            </div>
            <div className="input">
            <Autocomplete
        multiple
        id="tags-outlined-ser"
        options={serviceData}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        onChange={handleServiceSelect}
        style={{color:"white",background:""}}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Select Services..."
            
            sx={TextFieldStyle}
          />
        )}
      />
            </div>
          </div>
          <div className="col2-row1">
            <div className="row1-col1">
              <div className="inputHead">
                <h3>Phone Number</h3>
              </div>
              <div className="input">
                <FormControl sx={TextFieldStyle} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-password"
                    required
                    type="text"
                    fullWidth
                    placeholder="Phone number"
                    onChange={(e) =>
                      setOrderDetail((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    endAdornment={
                      <InputAdornment
                        position="start"
                        style={{ color: "#4B006E", padding: 0, margin: 0 }}
                      >
                        <PhoneIphoneOutlinedIcon
                          style={{ fontSize: "2rem", margin: 0, padding: 0 }}
                        />
                      </InputAdornment>
                    }
                    label=""
                  />
                </FormControl>
              </div>
            </div>
            <div className="row1-col1">
              <div className="inputHead">
                <h3>Date and Time</h3>
              </div>
              <div className="input">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    sx={{ padding: "0" }}
                    components={["DateTimePicker", "DateTimePicker"]}
                  >
                    <DateTimePicker
                      label=""
                      disablePast
                      viewRenderers={{
                        hours: renderTimeViewClock,
                        minutes: renderTimeViewClock,
                        seconds: renderTimeViewClock,
                      }}
                      onChange={(e) =>
                        setOrderDetail((prev) => ({
                          ...prev,
                          dateTime: moment(e.$d).format(),
                        }))
                      }
                      sx={{
                        ...TextFieldStyle,
                        svg: { color: "#4B006E", fontSize: "2rem" },
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="inputHead">
              <h3>Address</h3>
            </div>
            <div className="input">
              <TextField
                className="textField"
                required
                id="message"
                onChange={(e) =>
                  setOrderDetail((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
                label=""
                placeholder="we'll deliver happiness right to your door."
                multiline
                rows={2}
                fullWidth={true}
                type="text"
                sx={TextFieldStyle}
              />
            </div>
          </div>

          <div className="col">
            <div className="inputHead">
              <h3>Enter your house area</h3>
            </div>
            <div className="input">
              <TextField
                className="textField"
                id="area"
                label=""
                required
                onChange={(e) =>
                  setOrderDetail((prev) => ({ ...prev, area: e.target.value }))
                }
                placeholder="in m²(approx)"
                fullWidth={true}
                type="text"
                sx={TextFieldStyle}
              />
            </div>
          </div>
          <div className="col">
            <div className="inputHead inputhead-btn">
              <div>
                <h3>Company's Cleaning Supplies</h3>
              </div>
              <div className="btn-yesno">
                <p>NO</p>
                <Switch
                  // classes={switchStyles}
                  checked={toggled}
                  sx={toggleStyle}
                  onChange={(e) => setToggled(e.target.checked)}
                />
                <p
                  style={{
                    color: toggled ? " #4B006E" : "",
                    fontWeight: toggled ? "700" : "",
                    fontSize: toggled ? "1rem" : "",
                  }}
                >
                  YES
                </p>
              </div>
            </div>
            <div className="input" style={{ display: toggled ? "" : "none" }}>
              <TextField
                className="textField"
                id="area"
                label=""
                required
                onChange={(e) =>
                  setOrderDetail((prev) => ({
                    ...prev,
                    supplies: e.target.value,
                  }))
                }
                InputProps={{ readOnly: true }}
                fullWidth={true}
                type="text"
                sx={TextFieldStyle}
              />
            </div>
          </div>
          <div className="col">
            <div className="inputHead inputhead-btn">
              <div>
                <h3>Do you have any pet ?</h3>
              </div>
              <div className="btn-yesno">
                <p>NO</p>
                <Switch
                  // classes={switchStyles}
                  checked={pettoggled}
                  sx={toggleStyle}
                  onChange={(e) => setpetToggled(e.target.checked)}
                />
                <p
                  style={{
                    color: pettoggled ? " #4B006E" : "",
                    fontWeight: pettoggled ? "700" : "",
                    fontSize: pettoggled ? "1rem" : "",
                  }}
                >
                  YES
                </p>
              </div>
            </div>
            <div
              className="input"
              style={{ display: pettoggled ? "" : "none" }}
            >
              <Autocomplete
        multiple
        id="tags-outlined"
        options={petData}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        onChange={handlePetSelect}
        style={{color:"white",background:""}}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="choose your pet"
            sx={TextFieldStyle}
          />
        )}
      />
            </div>
          </div>
          <div className="col">
            <div className="inputHead">
              <h3>Any note for our professionals ?</h3>
            </div>
            <div className="input">
              <TextField
                className="textField"
                id="area"
                label=""
                placeholder="Any note........."
                fullWidth={true}
                onChange={(e) =>
                  setOrderDetail((prev) => ({ ...prev, note: e.target.value }))
                }
                type="text"
                sx={TextFieldStyle}
              />
            </div>
          </div>
          <div className="row-order-btn">
            <button className="order-btn" onClick={click}>
              Place Order
            </button>
          </div>
        </div>
      </div>
      <div className="col3" style={{display: preview ? "":"none"}}>
                <div className="orderContainer">
                <button onClick={click}>back</button>                  
                </div>
      </div>
    </div>
  );
};

export default ProductOrder;
