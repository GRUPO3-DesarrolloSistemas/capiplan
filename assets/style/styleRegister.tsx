import { StyleSheet } from "react-native";
import { width, height } from "../../src/constants/constants";
import { colors } from "../../src/themes/colors";

const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: colors.white,
    },
    textView: {
        height: '20%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 40,
        paddingRight: 30,
    },
    inputForm: {
        height: '40%',
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        marginTop: 30,
    },
    registerOptions: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    smallFontGray: {
        color: colors.lightGray,
        fontFamily: 'Comfortaa Bold',
        fontSize: 12,
    },
    smallFontRegular: {
        color: colors.lightGray,
        fontFamily: 'Comfortaa Regular',
        fontSize: 12,
    },
    loginBanner: {
        alignItems: 'center',
        justifyContent: 'center',
        transform: [
            {scaleY: -1},
            {scaleX: -1}
        ],
    },
});

export default styles;
