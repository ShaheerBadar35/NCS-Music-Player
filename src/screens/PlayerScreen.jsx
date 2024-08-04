import { Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import HeaderPlayer from '../components/HeaderPlayer'
import { fontSizes, iconSizes, spacing } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
//ICONS
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import PlayerRepeatToggle from '../components/PlayerRepeatToggle'
import PlayerShuffleToggle from '../components/PlayerShuffleToggle'
import PlayerProgressBar from '../components/PlayerProgressBar'
import { NextButton, PlayPauseButton, PreviousButton } from '../components/PlayControls'

const PlayerScreen = () => {
    const imageURL = "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/325x325/1705340894_JZ2NifV4gB_2024---CARTOON-JEYJA---On--On-ft.-Daniel-Levi.jpg";
    const isLiked = true;
    const isMute = false;
    return (
    <View style={styles.container}>
      <HeaderPlayer/>
      <View style={styles.ImageContainer}>
        <Image source={{uri:imageURL}} style = {styles.coverimage}/>  
      </View>
      <View style={styles.titleheartRowContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>On & On</Text>
          <Text style={styles.artist}>John Cena </Text>
        </View>
        <TouchableOpacity>
          <AntDesign 
            name={isLiked? "heart":"hearto"}
            color={colors.iconPrimary}
            size={iconSizes.medium}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.playercontrollerContainer}>
        <TouchableOpacity>
          <Feather 
            name={isMute? "volume-x" :"volume-1"}
            color={colors.iconSecondary}
            size={iconSizes.large} 
          />
        </TouchableOpacity>
        <View style={styles.togglebuttonsContainer}>
          <PlayerRepeatToggle/>
          <PlayerShuffleToggle/>
        </View>
      </View>      
      <PlayerProgressBar/>
      <View style={styles.playPauseContainer}>
        <PreviousButton size={iconSizes.extralarge}/>
        <PlayPauseButton size={iconSizes.extralarge}/>
        <NextButton size={iconSizes.extralarge}/>
      </View>
    </View>
  )
}

export default PlayerScreen

const styles = StyleSheet.create({
    container:{
        // paddingLeft:10,
        backgroundColor: colors.background,
        flex: 1,
    },
    ImageContainer:{
        alignItems: 'center',
        justifyContent:'center',
        marginVertical: spacing.large,
    },
    coverimage:{
        width:300,
        height:300,
        borderRadius:10,
        // paddingBottom:100,
    },    
    title:{
        color:colors.textPrimary,
        fontSize: fontSizes.extralarge,
        fontFamily: fontFamilies.medium,
    },
    artist:{
        color:colors.textPrimary,
        fontSize: fontSizes.medium,
        fontFamily: fontFamilies.light,
    },
    titleContainer:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    titleheartRowContainer:{
        flexDirection:'row',
        alignItems:'center',  
        // justifyContent:'center'
        paddingHorizontal:spacing.large,
    },
    playercontrollerContainer:{
      flexDirection:'row',
      // alignContent:'space-between'
      alignItems:'center',
      justifyContent:'space-between',
      paddingHorizontal:spacing.large,      
      // marginHorizontal:spacing.large,
      marginVertical:spacing.large,
      paddingBottom:spacing.extralarge,
    },
    togglebuttonsContainer:{
      flexDirection:'row',
      gap: spacing.medium,
    },
    playPauseContainer:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      gap:spacing.extralarge,  
      paddingTop:spacing.extralarge+15,
    }
})