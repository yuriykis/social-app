import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Main from './src/Main'
import Profile from './src/Profile'
import Home from './src/Home'
import Register from './src/Register'

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="main"
        component={Main}
        title="Main"
        initial={true}
        hideNavBar={true}
      />
      <Scene
        key="profile"
        component={Profile}
        title="Your Profile"
        back
      />
      <Scene
        key="register"
        component={Register}
        title="Create a new account"
        back
      />
      <Scene key="home" component={Home} hideNavBar={true} />
    </Scene>
  </Router>
)
export default Routes
