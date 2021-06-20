import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Alert
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Loaders from 'react-native-pure-loaders'
import { FlatList } from 'react-native-gesture-handler'
import { Card, FAB } from 'react-native-paper';
import GLOBALS from '../globals/Globals'

const PostsList = () => {
  const [loading, setLoading] = useState(false)
  const [postsData, setPostsData] = useState([])

  const loadPosts = () => {
    fetch(`${GLOBALS.BASE_URL}/api/posts/`, {
      method:"GET"
    })

    .then(resp => resp.json())
    .then(postsData => {
      postsData.reverse()
      setPostsData(postsData)
    })
    .catch(error => Alert.alert('error', error))
  }

  useEffect(()=>{
    loadPosts();
  }, [])

  const goToPosts = () => {
    Actions.posts()
  }
  const renderPost = (item) => {
    return(
      <Card style={styles.cardStyle}>
        <Text style={styles.titleStyle}>{item.title}</Text>
        <Text style={styles.contentStyle}>{item.content}</Text>
      </Card>
    )
  }
  if (loading) {
    return (
      <View style={styles.container}>
        <Loaders.Ring color="blue" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
          <FlatList
            style={{flex: 1}}
            data={postsData}
            renderItem = {({item}) => {
              return renderPost(item)
            }}
            keyExtractor = {item => `${item.id}`}
          />
         
        <View style={styles.footer}>
        <FAB
          style = {styles.fabStyle}
          small = {false}
          icon = "plus"
          onPress = {goToPosts}
        />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardStyle:{
    padding:10,
    margin:10
  },
  titleStyle:{
    fontSize:20
  },
  contentStyle:{
    fontSize:15
  },
  fabStyle:{
    position:'absolute',
    margin:16,
    right:0,
    bottom:0,
    backgroundColor:'blue'
  }
})
export default PostsList