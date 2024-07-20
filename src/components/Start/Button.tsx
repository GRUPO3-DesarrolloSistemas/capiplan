import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../themes/colors";

export default function StartButton({ buttonText, buttonFunction }) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => buttonFunction()}>
            <Text style={styles.fontButton}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        color: colors.white,
        width: 150,
        height: 40,
        backgroundColor: colors.purple,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    fontButton: {
        color: colors.white,
        textAlign: "center",
        fontFamily: 'Comfortaa Bold',
        fontSize: 15,
        lineHeight: 15,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 15,
        paddingRight: 15,
    },
});