import { createSlice } from '@reduxjs/toolkit'
import { loginToTheApplication } from '../services/api'

export const auth = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: false
  },
  reducers: {
    login: async (state, username, password) => {
      try {
        const res = await loginToTheApplication(username, password)
        const tokens = res.data
        await tokenService.setAsyncStorageTokens(tokens)
        state.loggedIn = true

        const test = await tokenService.getAccessToken()
        console.log(test)
      } catch (error) {
        await tokenService.removeAsyncStorageTokens()
        state.loggedIn = false
      }
    }
  }
})

export const { login } = auth.actions

export default auth.reducer
