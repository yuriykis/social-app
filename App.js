import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'
import Routes from './Routes.js'
import { Navbar } from './src/Navbar'

class socialApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar title="Social App"></Navbar>
        <Routes />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default socialApp
AppRegistry.registerComponent('socialApp', () => socialApp)
