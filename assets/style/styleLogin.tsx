import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen');


const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: '#fff',
    },
    loginBanner: {
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    logoContainer: {
        flex: 1,
        width: width,
        height: '40%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoBackground: {
        flex: 1,
        width: 130,
        height: 130,
        position: 'absolute',
        backgroundColor: '#FFF',
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
        fontSize: 50,
    },
    smallFont: {
        fontFamily: 'Comfortaa Bold',
        fontSize: 17,
    },
    smallFontBold: {
        color: '#868686',
        fontFamily: 'Comfortaa Bold',
        fontSize: 12,
    },
    smallFontRegular: {
        color: '#868686',
        fontFamily: 'Comfortaa Regular',
        fontSize: 12,
    },
    textForm: {
        flexDirection: "column",
        paddingLeft: 30,
    },
    inputForm: {
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: 40,
        paddingTop: 50,
        paddingBottom: 50,
    },
    loginInput: {
        width: 300,
        height: 40,
        textAlign: "left",
        fontFamily: 'Comfortaa Regular',
        fontSize: 15,
        backgroundColor: '#FFF',
        borderRadius: 7,
        shadowColor: '#121212',
        elevation: 10,
        paddingLeft: 20,
    },
    button: {
        width: 150,
        height: 40,
        backgroundColor: '#512bcf',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    fontButton: {
        textAlign: "center",
        fontFamily: 'Comfortaa Bold',
        fontSize: 15,
        lineHeight: 15,
        color: '#FFF',
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