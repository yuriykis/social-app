import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import GLOBALS from '../globals/Globals'
import { getElseMessages, getOwnMessages } from '../services/api'

export const getReceivedMessages = createAsyncThunk(
  'messages/getReceivedMessages',
  async (sender) => {
    const response = await getElseMessages(sender)
    return response.data
  }
)
export const getSentMessages = createAsyncThunk(
  'messages/getSentMessages',
  async (receiver) => {
    const response = await getOwnMessages(receiver)
    return response.data
  }
)

const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    receivedMessages: [],
    sentMessages: [],
    recivedStatus: null,
    sentStatus: null
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
    [getSentMessages.pending]: (state, action) => {
      state.sentStatus = 'loading'
    },
    [getSentMessages.fulfilled]: (state, { payload }) => {
      state.sentMessages = payload
      state.sentStatus = 'success'
    },
    [getSentMessages.rejected]: (state, action) => {
      state.sentStatus = 'failed'
    }
  }
})

export const selectReceivedMessages = (state) =>
  state.messages.receivedMessages

export const selectSentMessages = (state) =>
  state.messages.sentMessages

export default messageSlice.reducer
