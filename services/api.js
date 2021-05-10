import * as Axios from 'axios'
import { getAccessToken } from './tokenService'

var apiHost = 'http://192.168.56.1:8000'

const authenticationHeader = () => {
  return {
    Authorization: `Bearer ${getAccessToken()}`
  }
}

const api = Axios.create({
  baseURL: apiHost,
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
