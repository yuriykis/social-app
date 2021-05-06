import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LoginForm } from './LoginForm'

const Login = () => {
  return (
    <View style={styles.main}>
      <LoginForm style={styles.login_container}></LoginForm>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '60%'
  },
  login_container: {
    alignSelf: 'center'
  }
})
export default Login
