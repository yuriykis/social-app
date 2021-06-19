import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Main from './src/Main'
import Profile from './src/Profile'
import Home from './src/Home'
import Register from './src/Register'
import Posts from './src/Posts'
import PostsList from './src/PostsList'
import ProfilesList from './src/ProfilesList'
import EditProfile from './src/EditProfile'
import Conversations from './src/Conversations'
import Messages from './src/Messages'
import ReceivedMessages from './src/RecivedMessages'

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
      <Scene
        key="posts"
        component={Posts}
        title="Add Post"
        back
      />
      <Scene
        key="postsList"
        component={PostsList}
        title="Posts"
        back
      />
      <Scene
        key="profilesList"
        component={ProfilesList}
        title="Profiles"
        back
      />
      <Scene
        key="editProfile"
        component={EditProfile}
        title="Edit Profile"
        back
      />
      <Scene
        key="conversations"
        component={Conversations}
        title="Wiadomości"
        back
      />
      <Scene
        key="messages"
        component={Messages}
        title="messages"
        back
      />
      <Scene
        key="recivedMessages"
        component={ReceivedMessages}
        title="Odebrane"
        back
      />
    </Scene>
  </Router>
)
export default Routes
