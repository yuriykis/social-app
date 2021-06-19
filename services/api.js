import * as Axios from 'axios'
import { getAccessToken } from './tokenService'
import GLOBALS from '../globals/Globals'

const authenticationHeader = async () => {
  return {
    Authorization: `Bearer ${await getAccessToken()}`
  }
}

const api = Axios.create({
  baseURL: GLOBALS.BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export async function loginToTheApplication(login, password) {
  return api.post('api/token/', {
    username: login,
    password: password
  })
}

export async function registerInTheApplication(userData) {
  return api.post('api/register', userData)
}

export async function getHomeUser() {
  return api.get('api/user', {
    headers: await authenticationHeader()
  })
}

export async function getAllUsers() {
  return api.get('api/users', {
    headers: await authenticationHeader()
  })
}
