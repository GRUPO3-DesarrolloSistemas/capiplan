import React from 'react';
import { View, Text } from 'react-native';
import { getCurrentMonthDays, getCurrentDate } from '../../assets/utils/dateUtils';
import styles from '../../assets/style/styleCalendar';

const Calendar = () => {
  const currentDate = getCurrentDate();
  const daysInMonth = getCurrentMonthDays();

  return (
    <View style={styles.appContainer}>
      <View style={styles.calendarContainer}>
      <Text style={styles.currentDate}>{currentDate}</Text>
      <View style={styles.daysContainer}>
        {daysInMonth.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.day}>{day}</Text>
          </View>
        ))}
      </View>
    </View>
    </View>
  );
};

export default Calendar;
