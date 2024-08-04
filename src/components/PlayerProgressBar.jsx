import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { fontFamilies } from '../constants/fonts'
import { fontSizes, spacing } from '../constants/dimensions'
import { Slider } from 'react-native-awesome-slider'
import { useSharedValue } from 'react-native-reanimated'

const PlayerProgressBar = () => {
    const progress = useSharedValue(2.5);
    const min = useSharedValue(0);
    const max = useSharedValue(4.40);
  return (
    <View style={styles.progresstimeContainer}>
      <View style={styles.timeRow}>
        <Text style={styles.timeText}>3:40</Text>
        <Text style={styles.timeText}>0:40</Text>
      </View>
      <Slider
        style={styles.sliderContainer}
        containerStyle={{
            height:4,
            borderRadius:spacing.small,
        }}
        theme={{
            minimumTrackTintColor: colors.trackPlayed,
            maximumTrackTintColor: colors.trackRemaining,
        }}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        thumbWidth={18}
        renderBubble={()=>null}
      />
    </View>
  )
}

export default PlayerProgressBar

const styles = StyleSheet.create({
    sliderContainer:{
        // marginVertical:spacing.extralarge,
    },
    progresstimeContainer:{
        paddingHorizontal:spacing.large,
        paddingTop:spacing.medium,
        paddingBottom:spacing.extralarge  ,
        // paddingBottom:spacing.medium,
    },
    timeRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:spacing.extralarge,
    },
    timeText:{
        color:colors.textPrimary,
        fontFamily:fontFamilies.regular,
        fontSize: fontSizes.medium,
        opacity:0.75
    }
})