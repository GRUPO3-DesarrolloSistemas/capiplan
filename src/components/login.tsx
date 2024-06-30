import React from "react";
import { useFonts } from "expo-font";
import { Dimensions, StyleSheet, View, Image, Text, TextInput, Button, Pressable } from "react-native";

const { width, height } = Dimensions.get('screen');

import LoginSVG from "../../assets/svg/login/LoginSVG";

export default function Login() {
    const [fontsLoaded] = useFonts({
        'Comfortaa Regular': require('../../assets/fonts/Comfortaa/Comfortaa-Regular.ttf'),
        'Comfortaa Bold': require('../../assets/fonts/Comfortaa/Comfortaa-Bold.ttf')
    });

    if (!fontsLoaded) return null;
    return (
        <View style={styles.container}>
            <View style={styles.loginBanner}>
                <LoginSVG width={'100%'} />
                <View style={styles.logoContainer}>
                    <View style={styles.logoBackground}>
                        <Image style={styles.capibara} source={require('../../assets/img/capibara.png')} />
                    </View>
                </View>
            </View>
            <View style={styles.bodyLogin}>
                <View style={styles.textForm}>
                    <Text style={styles.bigFont}>Bienvenido</Text>
                    <Text style={styles.smallFont}>Inicia sesion con tu cuenta</Text>
                </View>
                <View style={styles.inputForm}>
                    <TextInput style={styles.loginInput}
                        placeholder="Ingrese su correo"
                        keyboardType="email-address">

                    </TextInput>
                    <TextInput style={styles.loginInput}
                        placeholder="Ingrese su clave"
                        secureTextEntry={true}
                        autoComplete="current-password">

                    </TextInput>
                </View>

                <Pressable style={styles.button}>
                    <Text style={styles.fontButton}>Ingresar</Text>
                </Pressable>
                <View style={styles.loginOptions}>
                    <Text style={styles.smallFontRegular}>¿Olvidaste tu contraseña?</Text>
                    <Text style={styles.smallFontRegular}>¿No tienes una cuenta? <Text style={styles.smallFontBold}> Registrate</Text></Text>
                </View>

            </View>
        </View>
    );
}


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
        color: '#FFF',
    },
    loginOptions: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        paddingTop: 10,
    },
});