import { StyleSheet, Text, TextInput } from "react-native";
import { colors } from "../../themes/colors";

export default function StartInput({ value, onChangeText,placeholderText, isPassword = false }) {
    return (
        <TextInput
            style={styles.loginInput}
            placeholder={placeholderText}
            secureTextEntry={isPassword}
            defaultValue={value}
            onChangeText={onChangeText}
        ></TextInput>
    );
};

const styles = StyleSheet.create({
    loginInput: {
        width: 300,
        height: 40,
        textAlign: "left",
        fontFamily: 'Comfortaa Regular',
        fontSize: 15,
        backgroundColor: colors.white,
        borderRadius: 7,
        shadowColor: colors.black,
        elevation: 10,
        paddingLeft: 20,
    },
    inputStateText: {
        fontFamily: 'Comfortaa Regular',
        fontSize: 10,
        color: colors.lightPurple,
        paddingBottom: 40,
    },
});