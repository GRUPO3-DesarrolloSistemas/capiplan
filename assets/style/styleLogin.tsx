import { StyleSheet } from "react-native";
import { colors } from "../../src/themes/colors";
import { width, height } from "../../src/constants/constants";
import { sizes } from "../../src/themes/sizes";

const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: colors.white,
    },
    loginBanner: {
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    logoContainer: {
        width: width,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoBackground: {
        flex: 1,
        width: 130,
        height: 130,
        position: 'absolute',
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 130 / 2,
    },
    capibara: {
        width: 120,
        height: 120,
        position: 'absolute',
        justifyContent: 'center',

    },
    bodyLogin: {
        width: width,
        height: '60%',
        position: 'relative',
        justifyContent: 'flex-start'
    },
    bigFont: {
        fontFamily: 'Comfortaa Bold',
        fontSize: sizes.big,
    },
    smallFont: {
        fontFamily: 'Comfortaa Bold',
        fontSize: sizes.large,
    },
    smallFontGray: {
        color: colors.lightGray,
        fontFamily: 'Comfortaa Bold',
        fontSize: sizes.small,
    },
    smallFontRegular: {
        color: colors.lightGray,
        fontFamily: 'Comfortaa Regular',
        fontSize: sizes.small,
    },
    textView: {
        height: 'auto',
        flexDirection: "column",
        top: -20,
        paddingLeft: 30,
    },
    inputForm: {
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingTop: 30,
    },
    loginInput: {
        width: 300,
        height: 40,
        textAlign: "left",
        fontFamily: 'Comfortaa Regular',
        fontSize: sizes.medium,
        backgroundColor: colors.white,
        borderRadius: 7,
        shadowColor: colors.black,
        elevation: 10,
        paddingLeft: 20,
    },
    inputStateText: {
        fontFamily: 'Comfortaa Regular',
        fontSize: sizes.extraSmall,
        color: colors.lightPurple,
        paddingBottom: 40,
    },
    loginErrorText: {
        fontFamily: 'Comfortaa Regular',
        fontSize: sizes.extraSmall,
        color: colors.lightPurple,
        textAlign: 'center',
        position: "relative"
    },
    loginOptions: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        paddingTop: 20,
    },
});

export default styles;