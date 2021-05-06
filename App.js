import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Navbar } from './src/Navbar'
import { Login } from './src/Login'

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title="Social App"></Navbar>
      <View style={styles.main}>
        <Login style={styles.login_container}></Login>
      </View>
    </View>
  )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1
  },
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
