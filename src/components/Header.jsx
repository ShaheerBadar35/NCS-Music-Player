import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
//icons
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import AntDesign from "react-native-vector-icons/FontAwesome5"
import { iconSizes, spacing } from '../constants/dimensions'
import { colors } from '../constants/colors'
import { useNavigation } from '@react-navigation/native'

const HeaderBar = () => {
  const navigation = useNavigation();
  const toggleDrawer=()=>{
    navigation.toggleDrawer();
  }
  return (
    <View style={styles.header}>
    <TouchableOpacity activeOpacity={0.5} onPress={toggleDrawer}>
    <FontAwesome5 name={"grip-lines"} color={colors.iconPrimary} size ={iconSizes.medium}/>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.5}>
    <AntDesign name={"search"} color={colors.iconPrimary} size ={iconSizes.medium}/>
    </TouchableOpacity>
    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        justifyContent:'space-between',
        paddingHorizontal:spacing.medium,
        paddingVertical:spacing.medium,
      }
})