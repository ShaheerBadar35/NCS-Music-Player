import { StyleSheet, Text, View, TouchableOpacity,} from 'react-native'
import React from 'react'
// import { } from 'react-native-gesture-handler'
import { colors } from '../constants/colors'
import { iconSizes, spacing } from '../constants/dimensions'

//icons
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const HeaderLikedSongs = () => {
  return (
    <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.5}>
        <FontAwesome5 name={"arrow-left"} color={colors.iconPrimary} size ={iconSizes.medium}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
        <MaterialCommunityIcons name={"tune-variant"} color={colors.iconPrimary} size ={iconSizes.large}/>
        </TouchableOpacity>
    </View>
  )
}

export default HeaderLikedSongs

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical: spacing.medium,
        paddingHorizontal: spacing.medium,
    }
})