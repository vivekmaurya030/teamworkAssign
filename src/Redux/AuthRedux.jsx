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
    'auth/login',
    async (params, { rejectWithValue }) => {
    const response = await apiPostCall(`http://localhost:3003/api/v1/user/login`, params)
     if (response.data.status === "error") {
        alert(response.data.message)
        return rejectWithValue(response.data)
    }
    alert("Logged in successfully!")
    return response.data
  }
)

export const registerUser = createAsyncThunk(
    'auth/register',
    async (params, { rejectWithValue }) => {
      const response = await apiPostCall(`http://localhost:3003/api/v1/user/createUser`, params)
      if (response.data.status === 'error') {
        return rejectWithValue(response.data)
      }
      return response.data
    }
  )



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
    // state.roles = action.payload.data.roles;
    state.userDetails = action.payload.data;
    console.log("payload is", action.payload.data);
    // alert('Role updated successfully.')
    },
    [registerUser.pending]: (state, action) => {
      state.isFetching = true
    },
    [registerUser.rejected]: (state, action) => {
      state.isFetching = false
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isFetching = false
      console.log("acrebferis ", action.payload);
      if(action.payload.status == 'error') {
        alert(action.payload.message)
        state.error = action.payload.message
        return
      }
      else {
        state.error = null
        console.log("login data is ", action.payload);
        localStorage.setItem("userDetails", JSON.stringify(action.payload.data))
        state.roles = action.payload.data.data.roles;
        state.userDetails = action.payload.data;
      }
      
    }
    }    
})

export const { setLoginRedirectUrl, setIsSignUp, logout } = counterSlice.actions
export default counterSlice.reducer