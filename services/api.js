import * as Axios from 'axios'
import { getAccessToken } from './tokenService'
import GLOBALS from '../globals/Globals'


const authenticationHeader = () => {
  return {
    Authorization: `Bearer ${getAccessToken()}`
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
  return api.post('api/user')
}
export async function getAllUsers() {
  const token = await getAccessToken()
  return api.get('api/users', {
    //...data
  }, {
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  }) 
}
