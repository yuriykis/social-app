import jwtDecode from 'jwt-decode'

import { isValid, toDate, isBefore } from 'date-fns'

import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getAccessToken() {
  return await AsyncStorage.getItem('access')
}

export async function getRefreshToken() {
  return await AsyncStorage.getItem('refresh')
}

export async function setAsyncStorageTokens(tokens) {
  if (tokens.access) {
    await AsyncStorage.setItem('access', tokens.access)
  }
  if (tokens.refresh) {
    await AsyncStorage.setItem('refresh', tokens.refresh)
  }
}

export async function removeAsyncStorageTokens() {
  await AsyncStorage.removeItem('access')
  await AsyncStorage.removeItem('refresh')
}

export function isValidAccessToken() {
  return checkTokenValidity(getAccessToken())
}

export function checkTokenValidity(token) {
  try {
    if (!token) {
      return false
    }
    const expToken = jwtDecode(token).exp
    const expMoment = toDate(expToken * 100000)
    if (isValid(expMoment)) {
      const res = isBefore(new Date(), expMoment)
      return res
    }
    return true
  } catch (e) {
    return false
  }
}
