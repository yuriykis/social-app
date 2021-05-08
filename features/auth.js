import { loginToTheApplication } from '../services/api'
import * as tokenService from '../services/tokenService'

export async function login(username, password) {
  try {
    const res = await loginToTheApplication(username, password)
    const tokens = res.data
    await tokenService.setAsyncStorageTokens(tokens)
  } catch (error) {
    await tokenService.removeAsyncStorageTokens()
    state.loggedIn = false
  }
}
