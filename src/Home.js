import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import { unsetUserlogin } from '../store/authSlice'
import { logout } from '../features/auth'
import { Actions } from 'react-native-router-flux'
import { useDispatch, useSelector } from 'react-redux'
import Loaders from 'react-native-pure-loaders'
import { FAB } from 'react-native-paper';
import { getUser } from '../store/userSlice'
import { selectAllUsers } from '../store/userSlice'

const Home = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const users = useSelector(selectAllUsers)
  const usersStatus = useSelector((state) => state.user.status)

  useEffect(()=>{
    dispatch(getUser())
  },[dispatch])

  const logoutFromApp = async () => {
    setLoading(true)
    await logout()
    dispatch(unsetUserlogin())
    Actions.main()
    setLoading(false)
  }
  const goToPosts = () => {
    Actions.posts()
  }
  const goToPostsList = () => {
    Actions.postsList()
  }
  const goToProfilesList = () => {
    Actions.profilesList()
  }
  const goToEditProfile = () => {
    Actions.editProfile()
  }
  if (usersStatus !== 'success') {
    return (
      <View style={styles.container}>
        <Loaders.Ring color="blue" />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        showsVerticalScrollIndicator={false}>
        <Image
          style={styles.userImg}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.userName}>{users[0].first_name} {users[1].last_name} </Text>
        <Text style={styles.aboutUser}>

          
        </Text>
        <View style={styles.userInfoWrapper}>
          <View>
          <FAB
            style = {styles.fabStyle}
            small = {false}
            icon = "email"
            onPress = {goToPosts}
          />
          <Text style={styles.userName}>Wiadomości</Text>
          </View>
          <View>
          <FAB
            style = {styles.fabStyle}
            small = {false}
            icon = "mail"
            onPress = {goToPostsList}
          />
          <Text style={styles.userName}>Posty</Text>
          </View>
        </View>
        <View style={styles.userInfoWrapper}>
          <View>
          <FAB
            style = {styles.fabStyle}
            small = {false}
            icon = "instagram"
            onPress = {goToProfilesList}
          />
          <Text style={styles.userName}>Profile</Text>
          </View>
          <View>
          <FAB
            style = {styles.fabStyle}
            small = {false}
            icon = "plus"
            onPress = {goToEditProfile}
          />
          <Text style={styles.userName}>Edytuj Profil</Text>
          </View>
        </View>
        <View style={styles.footer}>
        <TouchableOpacity
          style={{ margin: 10 }}
          onPress={logoutFromApp}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  fabStyle:{
    position:'relative',
    marginTop:10,
    backgroundColor:'blue',
    width: 55,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  addPost: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
})
export default Home
