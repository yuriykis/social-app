import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import GLOBALS from '../globals/Globals'
import { getHomeUser } from '../services/api';


export const getSingleUser = createAsyncThunk(
  'singleUser/getSingleUser',
  async () => {
      const response = await getHomeUser()
    return response.data
  }
)

const singleUserSlice = createSlice({
  name: 'singleUser',
  initialState: {
    user: {},
    status: null,
  },
  extraReducers: {
    [getSingleUser.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getSingleUser.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.status = 'success'
    },
    [getSingleUser.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export const selectSingleUser = (state) => state.singleUser.user

export default singleUserSlice.reducer