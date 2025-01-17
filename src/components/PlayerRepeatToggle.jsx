import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
//ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../constants/colors'
import { iconSizes } from '../constants/dimensions'

const PlayerRepeatToggle = () => {
  return (
    <TouchableOpacity>
        <MaterialCommunityIcons
            name={"repeat"}
            color={colors.iconSecondary}
            size={iconSizes.large}
        />
    </TouchableOpacity>
  )
}

export default PlayerRepeatToggle

const styles = StyleSheet.create({})