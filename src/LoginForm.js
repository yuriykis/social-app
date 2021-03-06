import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  FlatList
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../features/auth'
import { setUserlogin } from '../store/authSlice'
import Loaders from 'react-native-pure-loaders'

export const LoginForm = ({ onSubmit }) => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const goToRegister = () => {
    Actions.register()
  }
  const submitCredentials = async () => {
    setLoading(true)
    if (username.trim() && password.trim()) {
      // onSubmit(value)
      setUsername('')
      setPassword('')
      const loginOk = await login(username, password)
      if (loginOk) {
        dispatch(setUserlogin())
        Actions.home()
      } else {
        Alert.alert('Login failed. Please try again')
      }
    } else {
      Alert.alert('Credentials cannot be empty')
    }
    setLoading(false)
  }
  if (loading) {
    return (
      <View>
        <Loaders.Ring color="blue" />
      </View>
    )
  } else {
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
        <Text style={{ marginTop: 40, marginBottom: 10 }}>
          Dont have an account yet?
        </Text>
        <Button
          title={'Sign Up'}
          style={styles.input}
          onPress={goToRegister}
        />
      </View>
    )
  }
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
