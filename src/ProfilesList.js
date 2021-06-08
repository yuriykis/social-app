import React, { useEffect } from 'react'
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
import { Card } from 'react-native-paper';
import { TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'


const ProfilesList = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    const usersStatus = useSelector((state) => state.user.status)
    useEffect(()=>{
      dispatch(getUser())
    },[dispatch])
    console.log(users)
    const goToProfile = (user) => {
      Actions.profile({user: user})
    }
    const renderPost = (item) => {
      return(
        <TouchableOpacity onPress={() => goToProfile(item)}>
          <Card style={styles.cardStyle}>
            <Text style={styles.titleStyle}>Nick: {item.username}</Text>
            <Text style={styles.contentStyle}>User Name: {item.first_name} {item.last_name}</Text>
          </Card>
        </TouchableOpacity>
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
})
export default ProfilesList