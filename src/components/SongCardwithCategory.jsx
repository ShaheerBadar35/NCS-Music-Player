import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SongCard from './SongCard'
import { fontSizes, spacing } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
import { colors } from '../constants/colors'

const SongCardwithCategory = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{item.title}</Text>
      {/* <SongCard/> */}
      <FlatList 
      data={item.songs} 
      renderItem={SongCard} 
      horizontal={true} 
      ItemSeparatorComponent={<View style={{marginHorizontal:spacing.medium}}/>}
      contentContainerStyle={{paddingHorizontal: spacing.medium}}
      />
    </View>
  )
}

export default SongCardwithCategory

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerText:{
        fontSize:fontSizes.large,
        color: colors.textPrimary,
        fontFamily:fontFamilies.bold,  
        paddingVertical: spacing.medium,    
        paddingHorizontal: spacing.large,
    }
})