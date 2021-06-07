import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";
import { Icon, Header, Avatar, Image, Button } from "react-native-elements";
import { Actions } from 'react-native-router-flux'
import { TextInput } from 'react-native-paper'
import GLOBALS from '../globals/Globals'

const Posts = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const addPost = () => {
    fetch(GLOBALS.BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({title, content})
    })
    .then(resp => resp.json())
    .then(data =>{
      Actions.home()
    })
  }
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
          <TextInput
            label = 'title'
            mode = 'outlined'
            style={styles.titleStyle}
            autoFocus={true}
            onChangeText = {text => setTitle(text)}

          />
          <TextInput
            label = 'content'
            mode = 'outlined'
            style={styles.contentStyle}
            onChangeText = {text => setContent(text)}

          />
      </View>
      <View style={{ flex: 1, margin: 30}}>
          {/* <Icon
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
          /> */}
          <Button
          title="SUBMIT"
          type="outline"
          onPress = {() => addPost()}
          />
        </View>
    </ScrollView>
  );
}
export default Posts

const styles = StyleSheet.create({
  container: { flex: 1 },
  inputContainer: {
    flex: 1,
  },
  avatar: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    color: "#1DA1F2",
    borderRadius: 50,
    width: 80,
  },
  titleStyle: {
    padding: 10,
    margin: 10,
  },
  contentStyle: {
    padding: 10,
    margin: 10,
    height: 100,
  },
  icon: {
    marginRight: 20,
    fontSize: 30,
  },
  image: {
    aspectRatio: 4 / 5,
  },
})
