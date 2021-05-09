import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'
import Routes from './Routes.js'
import { Title } from './src/Title'
import store from './store/store'
import { Provider } from 'react-redux'

class socialApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Title title="Social App"></Title>
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
