import React, { useState } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet
} from 'react-native'
import { unsetUserlogin } from '../store/authSlice'
import { logout } from '../features/auth'
import { Actions } from 'react-native-router-flux'
import { useDispatch } from 'react-redux'
import Loaders from 'react-native-pure-loaders'
import { Navbar } from './Navbar'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const logoutFromApp = async () => {
    setLoading(true)
    await logout()
    dispatch(unsetUserlogin())
    Actions.main()
    setLoading(false)
  }
  if (loading) {
    return (
      <View style={styles.container}>
        <Loaders.Ring color="blue" />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Navbar />
        <TouchableOpacity
          style={{ margin: 100 }}
          onPress={logoutFromApp}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default Home
