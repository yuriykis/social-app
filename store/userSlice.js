import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getUser = createAsyncThunk(
  'user/getUser',
  async () => {
    return fetch(`http://192.168.1.253:8000/api/users`).then((res) => res.json())
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

export default userSlice.reducer