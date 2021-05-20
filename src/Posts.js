import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";
import { Icon, Header, Button, Avatar, Image } from "react-native-elements";
import { Actions } from 'react-native-router-flux'

const Posts = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.avatar}>
          <Avatar
            rounded
            size="medium"
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            style={styles.input}
            autoFocus={true}
            placeholder="What's Happening?"
            multiline={true}
            numberOfLines={4}
          />
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 100}}>
        <View style={styles.attachment}>
          <Icon
            name="image"
            type="evilicon"
            color="#517fa4"
            containerStyle={styles.icon}
            size={40}
          />
          <Icon
            name="gif"
            type="material"
            color="#517fa4"
            containerStyle={styles.icon}
            size={40}
          />
          <Icon
            name="graph-horizontal"
            type="foundation"
            color="#517fa4"
            containerStyle={styles.icon}
            size={40}
          />
          <Icon
            name="location"
            type="evilicon"
            color="#517fa4"
            containerStyle={styles.icon}
            size={40}
          />
          <Button
            title="Submit"
          />
        </View>
      </View>
    </ScrollView>
  );
}
export default Posts

const styles = StyleSheet.create({
  container: { flex: 1 },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
  },
  avatar: {
    margin: 20,
  },
  button: {
    color: "#1DA1F2",
    borderRadius: 50,
    width: 80,
  },
  textInput: {
    flex: 1,
    fontSize: 30,
    marginRight: 10,
  },
  input: {
    fontSize: 20,
  },
  attachment: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
  },
  icon: {
    marginRight: 20,
    fontSize: 30,
  },
  image: {
    aspectRatio: 4 / 5,
  },
})
