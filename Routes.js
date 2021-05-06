import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Main from './src/Main'
import Profile from './src/Profile'

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="main"
        component={Main}
        title="Main"
        initial={true}
      />
      <Scene key="profile" component={Profile} title="Profile" />
    </Scene>
  </Router>
)
export default Routes
