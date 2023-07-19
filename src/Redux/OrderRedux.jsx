import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiGetCall, apiPostCall,apiGETCall1,apiPutCall, apiPostCall1 } from '../utilities/site-apis';
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
  orderDetails: {},
  notificationList: []
};


// example of creating redux thunk

export const createOrder = createAsyncThunk(
    'order/create',
    async (params, { rejectWithValue }) => {
    const response = await apiPostCall1(`https://backend-klara.onrender.com/api/v1/order`, params)
     if (response.data.status === "error") {
        return rejectWithValue(response.data)
    }
    return response.data
  }
)

export const getNotification = createAsyncThunk(
  'order/getNotification',
  async (params, { rejectWithValue }) => {
  const response = await apiGETCall1(`https://backend-klara.onrender.com/api/v1/notification`, params)
   if (response.data.status === "error") {
      return rejectWithValue(response.data)
  }
  return response.data
}
)

export const updateNotification = createAsyncThunk(
  'order/updateNotification',
  async (params, { rejectWithValue }) => {
  const response = await apiPutCall(`https://backend-klara.onrender.com/api/v1/notification/${params.id}`, params)
   if (response.data.status === "error") {
      return rejectWithValue(response.data)
  }
  return response.data
}
)

export const counterSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: {
// Have to change it accordingly ...
    [createOrder.pending]: (state, action) => {
    state.isFetching = true
    },
    [createOrder.rejected]: (state, action) => {
    state.isFetching = false
    },
    [createOrder.fulfilled]: (state, action) => {
    state.isFetching = false
    state.error = null
    state.orderDetails = action.payload.data;
    // alert('Role updated successfully.')
    },

    [getNotification.pending]: (state, action) => {
    state.isFetching = true
    },
    [getNotification.rejected]: (state, action) => {
     state.isFetching = false
    },
    [getNotification.fulfilled]: (state, action) => {
    state.isFetching = false
    state.error = null
    state.notificationList = action.payload.data;
    // alert('Role updated successfully.')
    },
    
    [updateNotification.pending]: (state, action) => {
      state.isFetching = true
      },
      [updateNotification.rejected]: (state, action) => {
       state.isFetching = false
      },
      [updateNotification.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      // alert("updated successfully!")
      // state.notificationList = action.payload.data;
    },  
    }    
})

export const {  orderDetails } = counterSlice.actions
export default counterSlice.reducer