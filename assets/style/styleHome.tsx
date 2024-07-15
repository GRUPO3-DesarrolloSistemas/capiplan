import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    date: {
      fontSize: 48,
      fontWeight: 'bold',
    },
    dateDetails: {
      justifyContent: 'center',
    },
    monthYear: {
      fontSize: 16,
      color: '#777',
    },
    greeting: {
      alignItems: 'flex-end',
    },
    greetingText: {
      fontSize: 16,
      color: '#777',
    },
    userName: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    summary: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    meetingCard: {
      backgroundColor: '#f5f5f5',
      padding: 15,
      borderRadius: 10,
    },
    meetingTime: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    meetingTitle: {
      fontSize: 16,
      marginVertical: 5,
    },
    meetingSubtitle: {
      fontSize: 14,
      color: '#777',
    },
    meetingDetails: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    meetingDetailsText: {
      marginLeft: 5,
      fontSize: 14,
      color: '#777',
    },
    activities: {},
    activitiesGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    activityCard: {
      width: '48%',
      height: 100,
      backgroundColor: '#ccc',
      borderRadius: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
    },
    activityNumber: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
    activityText: {
      fontSize: 14,
      color: '#fff',
      textAlign: 'center',
    },
    purple: {
      backgroundColor: '#7B61FF',
    },
    orange: {
      backgroundColor: '#FFA500',
    },
  });

  export default styles