import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Login } from './Login'

const Main = () => {
  return (
    <View style={styles.main}>
      <Login style={styles.login_container}></Login>
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
export default Main
