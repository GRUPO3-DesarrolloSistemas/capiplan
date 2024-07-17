import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

import Navbar from "./NavBar";

const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACTIVITY_RECOGNITION,
          {
            title: 'Permiso para acceder a los sensores',
            message: 'Esta aplicación necesita acceso a tus sensores',
            buttonNeutral: 'Preguntar después',
            buttonNegative: 'Cancelar',
            buttonPositive: 'Aceptar',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Permisos concedidos');
        } else {
          console.log('Permisos denegados');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };
export default function Main() {
    useEffect(() => {
        requestPermissions();
      }, []);
    return (
        <Navbar />
    );
}
