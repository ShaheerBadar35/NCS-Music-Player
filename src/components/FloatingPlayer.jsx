import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import { fontSizes, iconSizes, spacing } from '../constants/dimensions';
import { fontFamilies } from '../constants/fonts';
import { NextButton, PlayPauseButton, PreviousButton } from './PlayControls';
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';
import MovingText from './MovingText';
import { useNavigation } from '@react-navigation/native';

const coverImageURL = 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/697/325x325/baby-pala-chrome-remix-1718236888-JxaHysSCwU.jpg';

const FloatingPlayer = () => {
    const navigation = useNavigation();
    const progress = useSharedValue(30);
    const min = useSharedValue(0);
    const max = useSharedValue(100);
    const openPlayerScreen = ()=>{
      navigation.navigate("PLAYER_SCREEN")
    };
    return (
        <View>
            <View style={{zIndex:1}}>
                <Slider
                    style={styles.container}
                    progress={progress}
                    minimumValue={min}
                    maximumValue={max}
                    theme={{
                        maximumTrackTintColor: colors.trackRemaining,
                        minimumTrackTintColor: colors.trackPlayed,
                        bubbleBackgroundColor: colors.background,
                    }}
                    // renderBubble={}
                />
            </View>
        <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={openPlayerScreen}>
        <Image source={{ uri: coverImageURL }} style={styles.coverImage} />
        <View style={styles.titleContainer}>
            <MovingText text={"KSI, Annie Marrie, Lil Wayen"} style={styles.title} animationThreshold={15}/>
            {/* <Text style={styles.title}>Baby</Text> */}
            <Text style={styles.artist}>Thorne, Sam</Text>
        </View>
        <View style={styles.playControlsContainer}>
            <PreviousButton size={iconSizes.medium}/>
            <PlayPauseButton size={iconSizes.large}/>
            <NextButton size={iconSizes.medium}/>
        </View>
        </TouchableOpacity>            
        </View>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: spacing.small,
    overflow:'hidden',
    // marginLeft:spacing.small,
    marginRight:spacing.medium
  },
  coverImage: {
    height: 70,
    width: 70,
    resizeMode:'cover',
    // marginRight: spacing.small,
  },
  title: {
    color: colors.textPrimary,
    fontSize: fontSizes.large,
    fontFamily: fontFamilies.medium,
  },
  artist: {
    color: colors.textPrimary,
    fontSize: fontSizes.medium,
    fontFamily: fontFamilies.medium,
  },
  playControlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingRight: 15,
  },
});
