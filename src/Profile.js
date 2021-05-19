import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

const Profile = () => {
  const goToPosts = () => {
    Actions.posts()
  }
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
        <Text style={styles.userName}>Robert Nowak</Text>
        <Text style={styles.aboutUser}>
          {'Cześć! jestem Robert Nowak. Lubię grać w piłkę nożną, interesuję się motoryzacją oraz zbieraniem znaczków pocztowych'}
        </Text>
        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <TouchableOpacity
              onPress={goToPosts}
            >
              <Text style={styles.userInfoTitle}>{1000}</Text>
              <Text style={styles.userInfoSubTitle}>Posts</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>2</Text>
            <Text style={styles.userInfoSubTitle}>Friends</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Profile

const styles = StyleSheet.create({
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
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
})