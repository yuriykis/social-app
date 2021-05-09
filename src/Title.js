import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Title = ({ title }) => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3949ab',
    paddingBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 20
  }
})
