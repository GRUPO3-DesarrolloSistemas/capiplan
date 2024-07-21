// GoogleFitStyles.tsx
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  accordionHeader: {
    backgroundColor: "#444",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  accordionHeaderText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  accordionContent: {
    padding: 15,
    backgroundColor: "#333",
  },
  accordionText: {
    color: "#fff",
    fontSize: 16,
  },
  mainContainer: {
    backgroundColor: "#1f2026"
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
