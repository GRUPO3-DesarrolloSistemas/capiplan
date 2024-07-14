import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { View } from 'react-native'; // Importa View si decides usarlo como contenedor
import AppNavigator from "./src/components/Salud/AppNavigator";
import Main from './src/components/main';



export default function App() {
  return (
        <Main />
  );
}

