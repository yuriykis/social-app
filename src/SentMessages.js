import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import {
  selectSentMessages,
  getSentMessages
} from '../store/messageSlice'
import { useDispatch, useSelector } from 'react-redux'
import Loaders from 'react-native-pure-loaders'
import { FlatList } from 'react-native-gesture-handler'
import { Card, FAB } from 'react-native-paper'

const SentMessages = (props) => {
  const sentMessages = useSelector(selectSentMessages)
  const sentMessagesStatus = useSelector(
    (state) => state.messages.sentStatus
  )
  const dispatch = useDispatch()

  useEffect(() => {
    const data = {
      receiver: props.user.username
    }
    dispatch(getSentMessages(data))
  }, [dispatch])

  const formatTime = (time) => {}
  const renderMessage = (item) => {
    return (
      <Card style={styles.cardStyle}>
        <Text style={styles.titleStyle}>{item.content}</Text>
        <Text style={styles.contentStyle}>{item.send_time}</Text>
      </Card>
    )
  }

  if (sentMessagesStatus !== 'success') {
    return (
      <View style={styles.container}>
        <Loaders.Ring color="blue" />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={sentMessages}
          renderItem={({ item }) => {
            return renderMessage(item)
          }}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    )
  }
}

export default SentMessages

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardStyle: {
    padding: 10,
    margin: 10
  },
  titleStyle: {
    fontSize: 20
  },
  contentStyle: {
    fontSize: 15
  },
  fabStyle: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'blue'
  }
})
