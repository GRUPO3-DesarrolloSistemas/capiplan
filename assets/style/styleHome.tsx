import { StyleSheet } from 'react-native';
import { colors } from '../../src/themes/colors';
import { sizes } from '../../src/themes/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateDetails: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    alignItems: 'flex-end',
  },
  greetingText: {
    fontSize: 16,
    color: '#777',
  },
  summary: {
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  meetingCard: {
    borderWidth: 1,
    borderColor: colors.lightPurple,
    backgroundColor: colors.extraLighGray,
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
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
  activitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  activityCard: {
    width: '48%',
    height: 130,
    borderRadius: 14,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  activityText: {
    color: colors.white,
    fontFamily: 'Comfortaa Bold',
    fontSize: sizes.medium,
    textAlign: 'center',
  },
  purple: {
    backgroundColor: colors.purple,
  },
  lightPurple: {
    backgroundColor: colors.lightPurple,
  },
  orange: {
    backgroundColor: colors.orange,
  },
  lightOrange: {
    backgroundColor: colors.lightOrange,
  },
});

export default styles