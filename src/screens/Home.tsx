import React, { useContext } from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../assets/style/styleHome';
import { UserContext } from "../context/AppContext";
import { fonts } from "../themes/fonts";
import { colors } from "../themes/colors";

const Home = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    const weekday = today.toLocaleString('default', { weekday: 'long' });
    const { userData } = useContext(UserContext);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={fonts.bigFont}>{day}</Text>
          <View style={styles.dateDetails}>
            <Text style={fonts.largeFontLightGray}>{weekday}</Text>
            <Text style={fonts.largeFontLightGray}>{month} {year}</Text>
          </View>
          <View style={styles.greeting}>
            <Text style={fonts.mediumFontLightGray}>Bienvenido</Text>
            <Text style={fonts.extraLargeFontBlack}>{userData.username}</Text>
          </View>
        </View>
        <View style={styles.summary}>
          <Text style={fonts.largeFontBlack}>Resumen</Text>
          <View style={styles.meetingCard}>
            <Text style={fonts.mediumFontGray}>Hoy</Text>
            <Text style={fonts.mediumFontLightGray}>Presentación proyecto final</Text>
            <Text style={fonts.mediumFontLightGray}>Desarrollo de Sistemas</Text>
            <View style={styles.meetingDetails}>
              <Icon name="location-outline" size={15} color={colors.lightPurple} />
              <Text style={fonts.mediumFontLightGray}>Zoom</Text>
            </View>
            <View style={styles.meetingDetails}>
              <Icon name="people-outline" size={15} color={colors.lightPurple} />
              <Text style={fonts.mediumFontLightGray}>Grupo 3</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={fonts.largeFontBlack}>Actividades</Text>
          <View style={styles.activitiesGrid}>
            <View style={[styles.activityCard, styles.purple]}>
              <Text style={fonts.extraLargeFontWhite}>6</Text>
              <Icon name="calendar-outline" size={50} color="#fff" />
              <Text style={styles.activityText}>Actividades pendientes</Text>
            </View>
            <View style={[styles.activityCard, styles.lightPurple]}>
              <Text style={fonts.extraLargeFontWhite}>3</Text>
              <Icon name="time-outline" size={50} color="#fff" />
              <Text style={styles.activityText}>Horas libres</Text>
            </View>
            <View style={[styles.activityCard, styles.lightOrange]}>
              <Text style={fonts.extraLargeFontWhite}>4</Text>
              <Icon name="checkmark-done-outline" size={50} color="#fff" />
              <Text style={styles.activityText}>Tareas Realizadas</Text>
            </View>
            <View style={[styles.activityCard, styles.orange]}>
              <Text style={fonts.extraLargeFontWhite}>8</Text>
              <Icon name="bed-outline" size={50} color="#fff" />
              <Text style={styles.activityText}>Horas de sueño</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  
  
  export default Home;