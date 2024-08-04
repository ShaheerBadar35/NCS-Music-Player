import { StyleSheet, Text, View , FlatList} from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import HeaderLikedSongs from '../components/HeaderLikedSongs'
import { fontSizes, spacing } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
import SongCard from '../components/SongCard'
import FloatingPlayer from '../components/FloatingPlayer'

const LikeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderLikedSongs/>
      <FlatList
      ListHeaderComponent={
        <Text style={styles.headerText}>Liked Songs</Text>
      }
       data={[1,2,3,4,5,6,7,8,9]}
       renderItem={()=><SongCard containerStyle={{
        width:"47%"
       }} imageStyle={{
        height: 160,
        width: 160, 
       }}
       />}
       numColumns={2}
       contentContainerStyle={{
        paddingBottom: 500,
        paddingHorizontal: spacing.large,
       }}
       columnWrapperStyle={{
        justifyContent:'space-between',
        marginVertical: spacing.large,
       }}
       />
       <FloatingPlayer/>
    </View>
  )
}

export default LikeScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.background,
        flex: 1,
      },
      headerText:{
        fontSize: fontSizes.extralarge,
        color: colors.textPrimary,
        // fontSize:fontSizes.large,
        // color: colors.textPrimary,
        fontFamily:fontFamilies.bold,  
        // padding: spacing.large,    
        // paddingHorizontal: spacing.medium,
    }      
})