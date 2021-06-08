import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../features/auth'
import { setUserlogin } from '../store/authSlice'
import Loaders from 'react-native-pure-loaders'
import { register } from '../features/register'

const EditProfile = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')

  const [loading, setLoading] = useState(false)
  const [showPassowrd, togglePassword] = useState(false)
  
  const togglePasswordInputs = () => {
      console.log(showPassowrd)
      togglePassword(!showPassowrd)
  }
//   const submitUserData = async () => {
//     setLoading(true)
//     if (
//       username.trim() &&
//       password.trim() &&
//       retypePassword.trim() &&
//       firstName.trim() &&
//       lastName.trim()
//     ) {
//       // onSubmit(value)
//       if (password !== retypePassword) {
//         Alert.alert('Passwords not matched')
//         setLoading(false)
//         return
//       }
//       const registerOk = await register({
//         username,
//         password,
//         firstName,
//         lastName,
//         age,
//         gender
//       })
//       if (registerOk) {
//         Actions.main()
//       } else {
//         Alert.alert('Registration failed. Please try again')
//       }
//     } else {
//       Alert.alert('User data cannot be empty')
//     }
//     setLoading(false)
//   }

  if (loading) {
    return (
      <View style={styles.container}>
        <Loaders.Ring color="blue" />
      </View>
    )
  } else {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder={'Username'}
            style={styles.input}
          />
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            placeholder={'First Name'}
            style={styles.input}
          />
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            placeholder={'Last Name'}
            style={styles.input}
          />
          <TextInput
            value={gender}
            onChangeText={setGender}
            placeholder={'Gender'}
            style={styles.input}
          />
          <Button
            title={'Save'}
            style={styles.input}
            onPress={togglePasswordInputs}
          />
          <View>
              {
              showPassowrd ? 
              <View>
               <Button
                title={'Save New Password'}
                style={styles.input}
                onPress={togglePasswordInputs}
               />
              </View>
               : 
               <Button
                title={'Change Password'}
                style={styles.input}
                onPress={togglePasswordInputs}
              />
              }
          </View>
          <View>
              {
              showPassowrd ? 
              <View>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                  />
                  <TextInput
                    value={retypePassword}
                    onChangeText={setRetypePassword}
                    placeholder={'Retype Password'}
                    secureTextEntry={true}
                    style={styles.input}
                  />
              </View>
               : 
              <Text>

              </Text>
              }
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '30%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10
  }
})

export default EditProfile
