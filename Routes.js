import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './src/Login'
import Profile from './src/Profile'

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="main"
        component={Login}
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
    </Scene>
  </Router>
)
export default Routes
