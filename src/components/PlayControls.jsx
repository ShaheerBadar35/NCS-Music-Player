import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { iconSizes } from "../constants/dimensions";
import { colors } from "../constants/colors";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"

export const PreviousButton =({size = iconSizes.large})=>{
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <FontAwesome6 name={"backward"} size={size} color={colors.iconPrimary}/>
        </TouchableOpacity>
    );
};

export const PlayPauseButton =({size = iconSizes.large})=>{
    const isPlaying = true;
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <FontAwesome6 
                name={isPlaying? "pause": "play"} 
                size={size} 
                color={colors.iconPrimary}
            />
        </TouchableOpacity>
    );
};

export const NextButton =({size = iconSizes.large})=>{
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <FontAwesome6 name={"forward"} size={size} color={colors.iconPrimary}/>
        </TouchableOpacity>
    );
};