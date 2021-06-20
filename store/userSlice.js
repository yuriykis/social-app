import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import GLOBALS from '../globals/Globals'
import { getAllUsers } from '../services/api'


export const getUser = createAsyncThunk(
  'user/getUser',
  async () => {
      const response = await getAllUsers();
    return response.data
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