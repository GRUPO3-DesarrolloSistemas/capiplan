import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { UserContext } from "../context/AppContext";
import Home from '../screens/Home'
import Calendar from '../screens/Calendar';
import GoogleFit from '../screens/GoogleFit';
import UserPanel from '../screens/userPanel';
import Start from './start';

import { colors } from '../themes/colors';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  const { token, isTokenValid, isLoading } = useContext(UserContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
        <ActivityIndicator size={'large'} color={colors.lightOrange}></ActivityIndicator>
      </View>
    )
  };

  return (
    <NavigationContainer>
      {token !== null && isTokenValid ?
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = '';

              if (route.name === 'Dashboard') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Calendario') {
                iconName = focused ? 'calendar' : 'calendar-outline';
              } else if (route.name === 'Salud') {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === 'Usuario') {
                iconName = focused ? 'person' : 'person-outline';
              }

              // Devuelve el icono solo si iconName está definido
              if (iconName) {
                return <Icon name={iconName} size={size} color={color} />;
              }

              return null;
            },
            tabBarActiveTintColor: colors.lightPurple,
            tabBarInactiveTintColor: colors.lightGray,
          })}
        >
          <Tab.Screen name="Dashboard" component={Home}
            options={{
              tabBarLabel: ''
            }} />
          <Tab.Screen name="Calendario" component={Calendar}
            options={{
              tabBarLabel: ''
            }} />
          <Tab.Screen name="Salud" component={GoogleFit}
            options={{
              tabBarLabel: ''
            }} />
          <Tab.Screen name="Usuario" component={UserPanel}
            options={{
              tabBarLabel: '',
              headerTransparent: true,
              headerTitleStyle: {
                color: '#FFF'
              },
            }} />
        </Tab.Navigator> :
        <Start></Start>}
    </NavigationContainer>
  );
};

export default Navbar;