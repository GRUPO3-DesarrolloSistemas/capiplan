// GoogleFitStyles.tsx
import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../src/themes/colors';
import { sizes } from '../../src/themes/sizes';

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  accordionHeader: {
    height: 50,
    backgroundColor: colors.lightOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accordionHeaderIcon: {
    position: 'absolute',
    left: 20,
    color: colors.white,
  },
  accordionHeaderText: {
    position: 'absolute',
    left: 50,
    color: colors.white,
    fontFamily: 'Comfortaa Bold',
    fontSize: sizes.large,
  },
  accordionContent: {
    padding: 15,
    backgroundColor: colors.extraLighGray,
  },
  mainContainer: {
    backgroundColor: colors.white,
  },
  fitImageContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: width * 0.15,
    marginRight: width * 0.15,
    marginBottom: width * 0.05,
  },
  fitExerciseStatsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    marginBottom: width * 0.05,
  },
  fitExerciseStatText: {
    color: "#9a9ba1",
    fontSize: 40,
    fontWeight: "100",
  },
  centerAlignContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  }
});

export default styles;
