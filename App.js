import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'
import Routes from './Routes.js'
import { Navbar } from './src/Navbar'
import store from './store/store'
import { Provider } from 'react-redux'

class socialApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navbar title="Social App"></Navbar>
          <Routes />
        </View>
      </Provider>
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
