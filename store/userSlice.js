import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import GLOBALS from '../globals/Globals'


export const getUser = createAsyncThunk(
  'user/getUser',
  async () => {
    return fetch(`${GLOBALS.BASE_URL}/api/users`).then((res) => res.json())
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getUser.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export const selectAllUsers = (state) => state.user.list

export default userSlice.reducer