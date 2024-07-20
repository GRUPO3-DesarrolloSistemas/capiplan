import { useContext, useEffect, useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "../../assets/style/styleRegister";
import StartButton from "../components/Start/Button";
import StartTextBig from "../components/Start/TextBig";
import StartTextSmall from "../components/Start/TextSmall";
import StartInput from "../components/Start/Input";
import StartInputStateText from "../components/Start/InputStateText";
import LoginSVG from "../../assets/svg/login/LoginSVG";
import { UserContext } from "../context/AppContext";

export default function Register({ navigation }) {

    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [stateNickname, setStateNickname] = useState('');
    const [stateEmail, setStateEmail] = useState('');
    const [statePassword, setStatePassword] = useState('');
    const [stateVerifyPassword, setStateVerifyPassword] = useState('');
    const { register, isRegisterError, isRegistered, setIsRegistered } = useContext(UserContext);

    function cleanInput() {
        setNickname('');
        setEmail('');
        setPassword('');
        setVerifyPassword('');
    }

    useEffect(() => {
        cleanInput();
    },[isRegistered])

    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <StartTextBig text={'Regístrate'}></StartTextBig>
                <StartTextSmall text={ 'Ingresa tu datos'}></StartTextSmall>
            </View>
            <View style={styles.inputForm}>
            <StartInput
                placeholderText={'Ingresa un nickname'}
                value={nickname}
                onChangeText={newText => {
                    setNickname(newText);
                    setStateNickname('');
                }}
                ></StartInput>
                <StartInputStateText text={stateNickname}/>
                <StartInput
                placeholderText={'Ingresa un correo'}
                value={email}
                onChangeText={newText => {
                    setEmail(newText);
                    setStateEmail('');
                }}
                ></StartInput>
                <StartInputStateText text={stateEmail}/>
                <StartInput
                placeholderText={'Ingresa una contraseña'}
                isPassword={true}
                value={password}
                onChangeText={newText => {
                    setPassword(newText);
                    setStatePassword('');
                }}
                ></StartInput>
                <StartInputStateText text={statePassword}/>
                <StartInput
                placeholderText={'Vuelve a ingresar la contraseña'}
                isPassword={true}
                value={verifyPassword}
                onChangeText={newText => {
                    setVerifyPassword(newText);
                    setStateVerifyPassword('');
                }}
                ></StartInput>
                <StartInputStateText text={stateVerifyPassword}/>
            </View>
            <View style={styles.registerOptions}>
                <StartButton 
                buttonText={'Registrarme'}
                buttonFunction={() => {
                    if (nickname.trim() !== '' && email.trim() !== '' && password.trim() !== '' && verifyPassword.trim() !== '') {
                        if(password.trim() === verifyPassword.trim()){
                            setStateVerifyPassword('');
                            register(nickname, email, password);
                        }else{
                            setStateVerifyPassword('La contraseña no coincide')
                        }
                    } else {
                        if (nickname.trim() === '') {
                            setStateNickname('Ingrese un nombre de usuario');
                        }
                        if (email.trim() === '') {
                            setStateEmail('Ingrese un correo');
                        }
                        if (password.trim() === '') {
                            setStatePassword('Ingrese una contraseña');
                        }
                        if (verifyPassword.trim() === '') {
                            setStateVerifyPassword('Ingrese de nuevo la contraseña');
                        }
                    }
                }}>
                </StartButton>
                { isRegisterError ?<Text style={{color: '#c6c6c6'}}>Datos erroneos o correo en uso por otra cuenta</Text> : <></>}
                { isRegistered ?<Text style={{color: '#c6c6c6'}}>Registrado correctamente</Text> : <></>}
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.smallFontGray}>Cancelar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.loginBanner}>
                <LoginSVG width={'100%'} />
            </View>
            
        </View>
    );

}