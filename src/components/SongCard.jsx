import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fonts';
import { fontSizes, spacing } from '../constants/dimensions';
const imageURL = "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/325x325/1705340894_JZ2NifV4gB_2024---CARTOON-JEYJA---On--On-ft.-Daniel-Levi.jpg";

const SongCard = ({item,containerStyle,imageStyle}) => {
  return (
    <TouchableOpacity style={[styles.container,containerStyle]} activeOpacity={0.5}>
      <Image source={{uri:item.artwork}} style = {[styles.coverimage,imageStyle]}/>
      <Text style={styles.title} numberOfLines={1}>{item?.title}</Text>
      <Text style={styles.artist}>{item?.artist}</Text>
    </TouchableOpacity>
  )
}

export default SongCard

const styles = StyleSheet.create({
    container:{
        // height:350,
        width:250,
    },  
    coverimage:{
        widht:250,
        height:250,
        borderRadius:10,
        // paddingBottom:100,
    },
    title:{
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium,
        textAlign: "center",
        fontSize: fontSizes.large,
        paddingVertical: spacing.extrasmall,
        // paddingTop: 100,
    },
    artist:{
        color:colors.textSecondary,
        textAlign: "center",
        fontSize: fontSizes.sm,
        fontFamily: fontFamilies.regular,
    }
})

// const styles = StyleSheet.create({
//   // container: {
//   //   width: 150, // Adjusted width to make it more compact
//   //   margin: spacing.small,
//   //   backgroundColor: colors.background,
//   //   borderRadius: 10,
//   //   overflow: 'hidden',
//   //   alignItems: 'center', // Center align the content
//   // },
//   // container:{
//   //   height:250,
//   //   width:250,
//   // },    
//   coverImage: {
//     width: '100%',
//     height: 150, // Adjusted height for the image
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   title: {
//     color: colors.textPrimary,
//     fontFamily: fontFamilies.medium,
//     textAlign: "center",
//     fontSize: fontSizes.large,
//     paddingVertical: spacing.extrasmall,
//   },
//   artist: {
//     color: colors.textSecondary,
//     textAlign: "center",
//     fontSize: fontSizes.medium, // Use medium font size
//     fontFamily: fontFamilies.regular,
//   }
// });