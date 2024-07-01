// style/styleCalendar.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50, 
  },
  calendarContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  currentDate: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayContainer: {
    width: '14.28%', // Aproximadamente 1/7 del ancho de la pantalla
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  day: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  eventsContainer: {
      marginTop: 20,
    },
    eventHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    eventsList: {
      marginTop: 20,
    },
    eventItem: {
      backgroundColor: '#f9f9f9',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    eventText: {
      fontSize: 16,
      color: '#333',
    },
});

export default styles;
