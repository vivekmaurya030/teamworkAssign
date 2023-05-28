import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiGetCall, apiPostCall,apiGETCall1,apiPutCall } from '../utilities/site-apis';
import { async } from 'q';

const initialState = {
  isFetching: false,
  error: null,
  isOptSend: false,
  name: null,
  phone: null,
  user: null,
  token: null,
  isSignUp: false,
  otp:null,
  errorMessage:'',
  isVerified: false,
  userDetails:{},
  Authorization:false,
  usersList:[],
  roles: []
};


// example of creating redux thunk

export const login = createAsyncThunk(
    'auth/register',
    async (params, { rejectWithValue }) => {
    const response = await apiPostCall(`http://localhost:3003/api/v1/user/login`, params)
     if (response.data.status === 'error') {
        return rejectWithValue(response.data)
    }
     return response.data
  }
)
// export const register = createAsyncThunk(
//     'auth/register',
//     async (params, { rejectWithValue }) => {
//       const response = await apiPostCall(`/user/checkUser`, params)
//       if (response.data.status === 'error') {
//         return rejectWithValue(response.data)
//       }
//       return response.data
//     }
//   )



export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setLoginRedirectUrl: (state, action) => {
        state.loginRedirectUrl = action.payload
      },
      setIsSignUp: (state, action) => {
        state.isSignUp = action.payload
      },
      logout: (state, action) => {
        state.user = null
        state.token = null
      },
    },
    extraReducers: {
// Have to change it accordingly ...
    [login.pending]: (state, action) => {
    state.isFetching = true
    },
    [login.rejected]: (state, action) => {
    state.isFetching = false
    },
    [login.fulfilled]: (state, action) => {
    state.isFetching = false
    state.error = null
    console.log("login data is ", action.payload);
    localStorage.setItem("userDetails", JSON.stringify(action.payload.data))
    state.roles = action.payload.data.data.roles;
    state.userDetails = action.payload.data;
    console.log("payload is", action.payload.data);
    // alert('Role updated successfully.')
    },
        // [register.pending]: (state, action) => {
        //   state.isFetching = true
        //   state.error = null
        //   state.isOptSend = false
        // },
        // [register.rejected]: (state, action) => {
        //   if (action.payload.message == 'OTP already sent, please check else resend the otp') {
        //     state.isOptSend = true
        //     state.isFetching = false
        //     state.name = action.payload.name
        //     state.phone = action.payload.phone
        //   } else if (action.payload.message == 'User Not Exist !! Please Signup') {
        //     state.isSignUp = true
        //     state.isFetching = false
        //     state.name = action.payload.name
        //     state.phone = action.payload.phone
        //   } else if (action.payload.message == 'User already exist. Please signin') {
        //     state.isSignUp = false
        //     state.isFetching = false
        //     state.name = action.payload.name
        //     state.phone = action.payload.phone
        //   } else {
        //     state.isFetching = false
        //     state.error = action.payload.message
        //   }
        // },
        // [register.fulfilled]: (state, action) => {
        //   if (action.payload.message == 'User Not Exist, Please Signup !!' || action.payload.message == 'User Already Exist, Please login'){
        //     state.error = true
        //     state.errorMessage = action.payload.message
        //     state.isFetching = false
        //   }
        //   else if(action.payload.message == 'OTP already sent, Please Verify!'){
        //     alert(action.payload.message)
        //     state.isFetching = false 
        //     state.error = null
        //     state.isOptSend = true
        //   }
        //   else{
        //     let result = action.payload.message.substr(4, 4);
        //     state.isFetching = false
        //     state.error = null
        //     state.otp=result
        //     state.isOptSend = true
        //     state.name = action.payload.name
        //     state.phone = action.payload.phone
        //   }
        // },
    }    
})

export const {  } = counterSlice.actions
export default counterSlice.reducer