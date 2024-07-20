import { StyleSheet, Text } from "react-native";

export default function StartTextSmall({ text }) {
    return (
        <Text style={styles.smallFont}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    smallFont: {
        fontFamily: 'Comfortaa Bold',
        fontSize: 17,
    },
});