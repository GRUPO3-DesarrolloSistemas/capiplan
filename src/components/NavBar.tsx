import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home'
import Calendar from './Calendar';
import GoogleFit from './Salud/GoogleFit';

const Tab = createBottomTabNavigator();

const Navbar = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = '';
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Calendar') {
                iconName = focused ? 'calendar' : 'calendar-outline';
              } else if (route.name === 'Heart') {
                iconName = focused ? 'heart' : 'heart-outline';
              }
  
              // Devuelve el icono solo si iconName está definido
              if (iconName) {
                return <Icon name={iconName} size={size} color={color} />;
              }
  
              return null;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Calendar" component={Calendar} />
          <Tab.Screen name="Heart" component={GoogleFit} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

export default Navbar;