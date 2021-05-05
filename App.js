import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar'

export default function App() {
  return (
    <View>
      <Navbar title="Social App"></Navbar>
      <View style={ styles.container }>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
