import React, { useState, useContext } from "react";
import { useFonts } from "expo-font";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";

import { UserContext } from "../context/AppContext"
import LoginSVG from "../../assets/svg/login/LoginSVG";
import styles from "../../assets/style/styleLogin";

import StartButton from "../components/Start/Button";

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailState, setEmailState] = useState('');
    const [passwordState, setPasswordState] = useState('');
    const { login, isLoginError } = useContext(UserContext);

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
                <View style={styles.textView}>
                    <Text style={styles.bigFont}>Bienvenido</Text>
                    <Text style={styles.smallFont}> Inicia sesión con tu cuenta</Text>
                </View>
                <View style={styles.inputForm}>
                    <TextInput style={styles.loginInput}
                        placeholder="Ingrese su correo"
                        keyboardType="email-address"
                        defaultValue={email}
                        onChangeText={newText => {
                            setEmail(newText);
                            setEmailState('');
                        }}>
                    </TextInput>
                    <Text style={styles.inputStateText}>{emailState}</Text>
                    <TextInput style={styles.loginInput}
                        placeholder="Ingrese su clave"
                        secureTextEntry={true}
                        autoComplete="current-password"
                        defaultValue={password}
                        onChangeText={newText => {
                            setPassword(newText);
                            setPasswordState('');
                        }}>
                    </TextInput>
                    <Text style={styles.inputStateText}>{passwordState}</Text>
                </View>

                <StartButton
                    buttonText={'Ingresar'}
                    buttonFunction={() => {
                        if (email.trim() !== '' && password.trim() !== '') {
                            login(email, password);

                        } else {
                            if (email.trim() === '') {
                                setEmailState('Ingrese un correo');
                            }
                            if (password.trim() === '') {
                                setPasswordState('Ingrese una contraseña');
                            }
                        }
                    }}></StartButton>
                {isLoginError ? <Text style={styles.loginErrorText}>Correo o contraseña incorrectos</Text> : <></>}
                <View style={styles.loginOptions}>
                    <Text style={styles.smallFontRegular}>¿Olvidaste tu contraseña?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.smallFontRegular}>¿No tienes una cuenta?<Text style={styles.smallFontGray}> Regístrate</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
