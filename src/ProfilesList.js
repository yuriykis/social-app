import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'
import Loaders from 'react-native-pure-loaders'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../store/userSlice'
import { selectAllUsers } from '../store/userSlice'

import { FlatList } from 'react-native-gesture-handler'
import { Card, FAB } from 'react-native-paper';
const ProfilesList = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    const usersStatus = useSelector((state) => state.user.status)
  
    useEffect(()=>{
      dispatch(getUser())
    },[dispatch])
    console.log(users)
    const renderPost = (item) => {
      return(
        <Card style={styles.cardStyle}>
          <Text style={styles.titleStyle}>{item.first_name}</Text>
          <Text style={styles.contentStyle}>{item.last_name}</Text>
        </Card>
      )
    }
  
  if (usersStatus !== 'success') {
    return (
      <View style={styles.container}>
        <Loaders.Ring color="blue" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
          <Text>Siema</Text>
          <FlatList
            style={{flex: 1}}
            data={users}
            renderItem = {({item}) => {
              return renderPost(item)
            }}
            keyExtractor = {item => `${item.id}`}
          />
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
export default ProfilesList