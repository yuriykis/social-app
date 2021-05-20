import React, { useState, useEffect } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Alert
} from 'react-native'
import { unsetUserlogin } from '../store/authSlice'
import { logout } from '../features/auth'
import { Actions } from 'react-native-router-flux'
import { useDispatch } from 'react-redux'
import Loaders from 'react-native-pure-loaders'
import { Navbar } from './Navbar'
import { FlatList } from 'react-native-gesture-handler'
import { ListItem } from 'react-native-elements/dist/list/ListItem'
import { Card, FAB } from 'react-native-paper';

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [postsData, setPostsData] = useState([])

  const loadPosts = () => {
    fetch('http://192.168.1.253:8000/api/posts/', {
      method:"GET"
    })

    .then(resp => resp.json())
    .then(postsData => {
      setPostsData(postsData)
    })
    .catch(error => Alert.alert('error', error))
  }

  useEffect(()=>{
    loadPosts();
  }, [])

  const dispatch = useDispatch()
  const logoutFromApp = async () => {
    setLoading(true)
    await logout()
    dispatch(unsetUserlogin())
    Actions.main()
    setLoading(false)
  }
  const goToProfile = () => {
    Actions.profile()
  }
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
      <SafeAreaView style={styles.container}>
          <FlatList
            data={postsData}
            renderItem = {({item}) => {
              return renderPost(item)
            }}
            keyExtractor = {item => `${item.id}`}
          />
         
        <View style={styles.settings}>
        <TouchableOpacity
          style={{ margin: 10 }}
          onPress={logoutFromApp}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: 10 }}
          onPress={goToProfile}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
        <FAB
          style = {styles.fabStyle}
          small = {false}
          icon = "plus"
          onPress = {goToPosts}
        />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
  },
  settings: {
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
export default Home
