import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import TrackPlayer from 'react-native-track-player';

export default function App() {

  useEffect(()=>{
    setupPlayer(); 
  },[])
  const setupPlayer= async () =>{
    await TrackPlayer.setupPlayer();
  }
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
      {/* <StackNavigation/> */}
      <DrawerNavigation/>
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})