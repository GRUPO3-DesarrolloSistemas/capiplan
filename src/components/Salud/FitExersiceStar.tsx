import React from "react";
import { View, Text } from "react-native";

interface FitExerciseStatProps {
  quantity: string;
  type: string;
}

const FitExerciseStat: React.FC<FitExerciseStatProps> = ({ quantity, type }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ color: "#e6e7ec", fontSize: 30, fontWeight: "700" }}>
        {quantity}
      </Text>
      <Text style={{ color: "#9a9ba1", fontSize: 20, fontWeight: "300" }}>
        {type}
      </Text>
    </View>
  );
};

export default FitExerciseStat;
