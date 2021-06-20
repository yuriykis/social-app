import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import { Avatar, Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { TextInput } from 'react-native-paper'
import GLOBALS from '../globals/Globals'
import {
  selectReceivedMessages,
  getReceivedMessages
} from '../store/messageSlice'
import { useDispatch, useSelector } from 'react-redux'

const Messages = (props) => {
  const goToRecivedMessages = (user) => {
    Actions.recivedMessages({ user: user })
  }
  const goToSentMessages = (user) => {
    Actions.sentMessages({ user: user })
  }
  const goToSendMessage = (user) => {
    Actions.sendMessage({ user: user })
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
      </View>
      <View style={{ flex: 1, margin: 30 }}>
        <Text style={styles.userName}>
          {props.user.firstName} {props.user.lastName}{' '}
        </Text>
        <Button
          title="Nowa wiadomość"
          type="outline"
          onPress={() => goToSendMessage(props.user)}
        />
      </View>
      <View style={{ flex: 1, margin: 30 }}>
        <Button
          title="Wysłane"
          type="outline"
          onPress={() => goToSentMessages(props.user)}
        />
      </View>
      <View style={{ flex: 1, margin: 30 }}>
        <Button
          title="Odebrane"
          type="outline"
          onPress={() => goToRecivedMessages(props.user)}
        />
      </View>
    </ScrollView>
  )
}
export default Messages

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
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 20
  }
})
