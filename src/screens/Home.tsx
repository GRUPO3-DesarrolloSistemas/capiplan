import React, { useContext } from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../assets/style/styleHome';
import { UserContext } from "../context/AppContext";

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
          <Text style={styles.date}>{day}</Text>
          <View style={styles.dateDetails}>
            <Text style={styles.monthYear}>{weekday}</Text>
            <Text style={styles.monthYear}>{month} {year}</Text>
          </View>
          <View style={styles.greeting}>
            <Text style={styles.greetingText}>Bienvenido</Text>
            <Text style={styles.userName}>{userData.username}</Text>
          </View>
        </View>
        <View style={styles.summary}>
          <Text style={styles.sectionTitle}>Resumen</Text>
          <View style={styles.meetingCard}>
            <Text style={styles.meetingTime}>11:00 - 11:30</Text>
            <Text style={styles.meetingTitle}>Reunión Proyecto ABC</Text>
            <Text style={styles.meetingSubtitle}>Proyecto de la empresa X</Text>
            <View style={styles.meetingDetails}>
              <Icon name="location-outline" size={16} color="#000" />
              <Text style={styles.meetingDetailsText}>Lugar</Text>
            </View>
            <View style={styles.meetingDetails}>
              <Icon name="people-outline" size={16} color="#000" />
              <Text style={styles.meetingDetailsText}>Grupo Trabajo 3</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Actividades</Text>
          <View style={styles.activitiesGrid}>
            <View style={[styles.activityCard, styles.purple]}>
              <Text style={styles.activityNumber}>6</Text>
              <Icon name="calendar-outline" size={24} color="#fff" />
              <Text style={styles.activityText}>Actividades pendientes</Text>
            </View>
            <View style={[styles.activityCard, styles.purple]}>
              <Text style={styles.activityNumber}>3</Text>
              <Icon name="time-outline" size={24} color="#fff" />
              <Text style={styles.activityText}>Horas libres</Text>
            </View>
            <View style={[styles.activityCard, styles.orange]}>
              <Text style={styles.activityNumber}>4</Text>
              <Icon name="checkmark-done-outline" size={24} color="#fff" />
              <Text style={styles.activityText}>Tareas Realizadas</Text>
            </View>
            <View style={[styles.activityCard, styles.orange]}>
              <Text style={styles.activityNumber}>8</Text>
              <Icon name="bed-outline" size={24} color="#fff" />
              <Text style={styles.activityText}>Horas de sueño</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  
  
  export default Home;