import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Avatar, Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { TextInput } from 'react-native-paper'
import GLOBALS from '../globals/Globals'
import { sendMessage } from '../services/api'

const SendMessage = (props) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const sendNewMessage = () => {
    const newMessage = {
      receiver: props.user.username,
      send_time: '18/09/19 01:55:19',
      content: content
    }
    sendMessage(newMessage)
    goToMessages(props.user)
  }
  const goToMessages = (user) => {
    Actions.messages({ user: user })
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.avatar}>
          <Avatar
            rounded
            size="medium"
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png'
            }}
          />
        </View>
        <TextInput
          label="content"
          mode="outlined"
          style={styles.contentStyle}
          onChangeText={(text) => setContent(text)}
        />
      </View>
      <View style={{ flex: 1, margin: 30 }}>
        <Button
          title="Wyślij"
          type="outline"
          onPress={() => sendNewMessage()}
        />
      </View>
    </ScrollView>
  )
}
export default SendMessage

const styles = StyleSheet.create({
  container: { flex: 1 },
  inputContainer: {
    flex: 1
  },
  avatar: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    color: '#1DA1F2',
    borderRadius: 50,
    width: 80
  },
  titleStyle: {
    padding: 10,
    margin: 10
  },
  contentStyle: {
    padding: 10,
    margin: 10,
    height: 100
  },
  icon: {
    marginRight: 20,
    fontSize: 30
  },
  image: {
    aspectRatio: 4 / 5
  }
})
