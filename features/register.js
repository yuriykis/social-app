import { registerInTheApplication } from '../services/api'

export async function register(userData) {
  try {
    await registerInTheApplication(userData)
    return true
  } catch (error) {
    return false
  }
}
