import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    loggedIn: false
  },
  reducers: {
    setUserlogin: (state) => {
      state.loggedIn = true
    },
    unsetUserlogin: (state) => {
      state.loggedIn = false
    }
  }
})

export const { setUserlogin, unsetUserlogin } = authSlice.actions

export default authSlice.reducer
