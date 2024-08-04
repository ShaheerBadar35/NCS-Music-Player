import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
//icons

import HeaderBar from '../components/Header'
import SongCardwithCategory from '../components/SongCardwithCategory'
import FloatingPlayer from '../components/FloatingPlayer'
import { SongsWithCategory } from '../data/SongWtihCategory'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderBar/>
      <FlatList
        data={SongsWithCategory}
        renderItem={SongCardwithCategory}
        contentContainerStyle={{
          paddingBottom:350,
        }}
      />
      {/* <SongCardwithCategory/> */}
      <FloatingPlayer/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.background,
    flex: 1,
  },
})