import { StyleSheet, Text, View, TouchableOpacity,} from 'react-native'
import React from 'react'
// import { } from 'react-native-gesture-handler'
import { colors } from '../constants/colors'
import { fontSizes, iconSizes, spacing } from '../constants/dimensions'

//icons
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { fontFamilies } from '../constants/fonts'

const HeaderPlayer = () => {
  return (
    <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.5}>
        <FontAwesome5 name={"arrow-left"} color={colors.iconPrimary} size ={iconSizes.medium}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Playing Now</Text>
        {/* <TouchableOpacity activeOpacity={0.5}>
        <MaterialCommunityIcons name={"tune-variant"} color={colors.iconPrimary} size ={iconSizes.large}/>
        </TouchableOpacity> */}
    </View>
  )
}

export default HeaderPlayer

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        alignItems:'center',
        // justifyContent:'space-between',
        paddingVertical: spacing.medium,
        paddingHorizontal: spacing.medium,
    },
    headerText:{
        fontSize: fontSizes.extralarge,
        color: colors.textPrimary,
        fontFamily:fontFamilies.bold,  
        marginLeft: "27%",
        // alignContent: 'flex-start',

    }
})