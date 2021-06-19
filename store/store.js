import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import userReducer from './userSlice'
import singleUserReducer from './singleUserSlice'

export default configureStore({
  reducer: { 
    auth: authReducer, 
    user: userReducer,
    singleUser: singleUserReducer,
  }
})
