import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const Profile = () => {
  const goToHome = () => {
    Actions.main()
  }
  return (
    <TouchableOpacity style={{ margin: 128 }} onPress={goToHome}>
      <Text>This is Profile</Text>
    </TouchableOpacity>
  )
}
export default Profile
w
