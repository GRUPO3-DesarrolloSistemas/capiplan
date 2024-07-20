import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

import { url } from '../utils/api/UserApi'
import { fetchRegister } from '../utils/services/Register'
import { fetchLogin } from '../utils/services/Login';
import { fetchUserData } from '../utils/services/GetUserData';
import { err } from 'react-native-svg';

export const UserContext = createContext();

export const AppProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [isTokenValid, setIsTokenValid] = useState(false);
    const [userData, setUserData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoginError, setIsLoginError] = useState(false);
    const [isRegisterError, setIsRegisterError] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        await fetchLogin(email, password)
            .then((response) => response.json())
            .then((data) => {
                setToken(data.accessToken);
                setIsLoginError(false);
                AsyncStorage.setItem('token', data.accessToken);
            })
            .catch(e => {
                console.log('Login error', { e });
                setIsLoginError(true);
            });

        let userToken = await AsyncStorage.getItem('token');
        await fetchUserData(userToken)
            .then(response => response.json())
            .then(data => {
                let userData = JSON.stringify(data)
                setUserData(data);
                setIsTokenValid(true);
                AsyncStorage.setItem('userData', userData);
                AsyncStorage.setItem('tokenValid', 'true')
            })
            .catch(e => {
                console.log('Token error', { e });
            });
        setIsLoading(false);
    };

    const logout = () => {
        setIsLoading(true);
        setToken(null);
        setUserData(null);
        setIsTokenValid(false);
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('userData');
        AsyncStorage.removeItem('tokenValid');
        setIsLoading(false);
    };

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('token');
            let userData = await AsyncStorage.getItem('userData');
            let tokenValid = await AsyncStorage.getItem('tokenValid');
            userData = JSON.parse(userData);
            setToken(userToken);
            setUserData(userData);
            setIsTokenValid(!!tokenValid);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const register = async (nickname: string, email: string, password: string) => {
        try {
            setIsLoading(true);
            fetchRegister(nickname, email, password)
                .then((response) => response.json())
                .then((data) => { setIsRegisterError(!data); setIsRegistered(data) })
                .catch(e => {
                    console.log('Register error: ', { e });
                });
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <UserContext.Provider
            value={{
                token,
                setToken,
                userData,
                isLoading,
                setIsLoading,
                isTokenValid,
                isLoginError,
                isRegisterError,
                setIsRegisterError,
                isRegistered,
                setIsRegistered,
                login,
                logout,
                register,
            }}>
            {children}
        </UserContext.Provider>
    )
}