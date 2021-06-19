import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import GLOBALS from '../globals/Globals'
import { getElseMessages } from '../services/api';


export const getReceivedMessages = createAsyncThunk(
  'messages/getReceivedMessages',
  async (sender) => {
      const response = await getElseMessages(sender);
    return response.data
  }
)

const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    receivedMessages: [],
    sentMessages: [],
    recivedStatus: null,
    sentStatus: null,
  },
  extraReducers: {
    [getReceivedMessages.pending]: (state, action) => {
      state.recivedStatus = 'loading'
    },
    [getReceivedMessages.fulfilled]: (state, { payload }) => {
      state.receivedMessages = payload
      state.recivedStatus = 'success'
    },
    [getReceivedMessages.rejected]: (state, action) => {
      state.recivedStatus = 'failed'
    },
  },
})

export const selectReceivedMessages = (state) => state.messages.receivedMessages

export default messageSlice.reducer