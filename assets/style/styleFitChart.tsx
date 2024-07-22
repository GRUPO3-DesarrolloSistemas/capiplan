// FitChartStyles.tsx
import { StyleSheet } from 'react-native';
import { colors } from '../../src/themes/colors';
import { sizes } from '../../src/themes/sizes';
import { width } from '../../src/constants/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingLeft: 20,
    marginTop: 20,
  },
  title: {
    color: colors.gray,
    fontFamily: 'Comfortaa Bold',
    fontSize: sizes.large,
    marginBottom: 5,
  },
  description: {
    color: colors.lightGray,
    fontFamily: 'Comfortaa Bold',
    fontSize: sizes.medium,
    marginBottom: 20,
  },
  chart: {
    alignSelf: 'center',
  },
  horizontalSeparator: {
    top: 2,
    borderWidth: 1,
    borderColor: colors.lightOrange,
    width: width - 50,
    alignSelf: 'center',
  },
});

export default styles;
