import { StyleSheet, Text } from "react-native";
import { colors } from "../../themes/colors";

export default function StartInputStateText({ text }) {
    return (
        <Text style={styles.inputStateText}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    inputStateText: {
        fontFamily: 'Comfortaa Regular',
        fontSize: 11,
        color: colors.lightPurple,
        paddingBottom: 30,
    },
});