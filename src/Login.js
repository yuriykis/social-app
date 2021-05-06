import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'

export const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitCredentials = () => {
    if (username.trim() && password.trim()) {
      // onSubmit(value)
      setUsername('')
      setPassword('')
      Actions.profile()
    } else {
      Actions.profile()
      //Alert.alert('Credentials cannot be empty!')
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />

      <Button
        title={'Login'}
        style={styles.input}
        onPress={submitCredentials}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10
  }
})
