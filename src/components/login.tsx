import React from "react";
import { useFonts } from "expo-font";
import { View, Image, Text, TextInput, Button, Pressable, TouchableOpacity } from "react-native";

import LoginSVG from "../../assets/svg/login/LoginSVG";
import styles from "../../assets/style/styleLogin";

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

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.fontButton}>Ingresar</Text>
                </TouchableOpacity>
                
                <View style={styles.loginOptions}>
                    <Text style={styles.smallFontRegular}>¿Olvidaste tu contraseña?</Text>
                    <Text style={styles.smallFontRegular}>¿No tienes una cuenta? <Text style={styles.smallFontBold}> Registrate</Text></Text>
                </View>

            </View>
        </View>
    );
}
