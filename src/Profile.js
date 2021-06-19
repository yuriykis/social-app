import React from 'react'
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native'

const Profile = (props) => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.userName}>Nick: {props.user.username} </Text>
        <Text style={styles.userName}>{props.user.firstName} {props.user.lastName} </Text>
        <Text style={styles.userName}>gender: {props.user.gender} </Text>
        <Text style={styles.userName}>age:  {props.user.age}</Text>
        
        <Text style={styles.aboutUser}>

          {props.user.info}
        </Text>
      </ScrollView>
    </SafeAreaView>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 20,
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
})
export default Profile
