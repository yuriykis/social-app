import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login'
import Home from './Home'

const Main = () => {
  const isUserLoggedIn = useSelector((state) => state.auth.loggedIn)

  if (isUserLoggedIn) {
    return <Home />
  } else {
    return <Login />
  }
}
export default Main
