import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { colors } from '../constants/colors'
import { fontSizes, iconSizes, spacing } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'

//ICONS
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const CustomDrawerContent = (props) => {
    const isDarkMode = true;
    const toggleDrawer = ()=>{
        props.navigation.toggleDrawer();
    }
  return (
    <DrawerContentScrollView style={styles.container}>
        <View style={styles.headerIconContainer}>
            <TouchableOpacity onPress={toggleDrawer}>
                <AntDesign
                    name={"close"}
                    color={colors.iconPrimary}
                    size={iconSizes.medium}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Octicons
                    name={isDarkMode? "sun":"moon"}
                    color={colors.iconPrimary}
                    size={iconSizes.medium}
                />
            </TouchableOpacity>
        </View>
        <View style={styles.drawerItemContainer}>
            <DrawerItem
                label={"Profile"}
                icon={()=>(
                    <AntDesign
                        name={"user"}
                        size={iconSizes.medium}
                        color={colors.iconSecondary}
                    />
                )}
                labelStyle={styles.labelstyle}
                style={styles.drawerItem}
            />
            <DrawerItem
                label={"Liked Songs"}
                icon={()=>(
                    <AntDesign
                        name={"hearto"}
                        size={iconSizes.medium}
                        color={colors.iconSecondary}
                    />
                )}
                labelStyle={styles.labelstyle}
                style={styles.drawerItem}
                onPress={()=>{
                    props.navigation.navigate("LIKE_SCREEN");
                }}
            />
            <DrawerItem
                label={"Language"}
                icon={()=>(
                    <Ionicons
                        name={"earth-outline"}
                        size={iconSizes.medium}
                        color={colors.iconSecondary}
                    />
                )}
                labelStyle={styles.labelstyle}
                style={styles.drawerItem}
            />
            <DrawerItem
                label={"Contact us"}
                icon={()=>(
                    <MaterialCommunityIcons
                        name={"message-text-outline"}
                        size={iconSizes.medium}
                        color={colors.iconSecondary}
                    />
                )}
                labelStyle={styles.labelstyle}
                style={styles.drawerItem}
            />
            <DrawerItem
                label={"FAQs"}
                icon={()=>(
                    <MaterialCommunityIcons
                        name={"lightbulb-on-outline"}
                        size={iconSizes.medium}
                        color={colors.iconSecondary}
                    />
                )}
                labelStyle={styles.labelstyle}
                style={styles.drawerItem}
            />
            <DrawerItem
                label={"Settings"}
                icon={()=>(
                    <Ionicons
                        name={"settings-outline"}
                        size={iconSizes.medium}
                        color={colors.iconSecondary}
                    />
                )}
                labelStyle={styles.labelstyle}
                style={styles.drawerItem}
            />
        </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.background,
    },
    headerIconContainer:{
        paddingHorizontal:spacing.medium+1,
        paddingVertical:spacing.large,
        paddingBottom:spacing.extralarge,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    labelstyle:{
        fontSize: fontSizes.medium,
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium,
    },
    drawerItem:{
        marginVertical: spacing.small,
    }
})