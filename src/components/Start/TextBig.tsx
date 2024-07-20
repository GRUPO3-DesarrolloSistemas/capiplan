import { StyleSheet, Text } from "react-native";
import { fonts } from "../../themes/fonts";

export default function StartTextBig ({text}){
    return(
        <Text style={fonts.bigFont}>{text}</Text>
    );
};
