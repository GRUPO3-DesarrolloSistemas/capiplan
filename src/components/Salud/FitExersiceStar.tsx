import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

interface FitExerciseStatProps {
  quantity: string;
  type: string;
}

const FitExerciseStat: React.FC<FitExerciseStatProps> = ({ quantity, type }) => {
  return (
    <View style={{ alignItems: "center"}}>
      <Text style={fonts.extraLargeFontGray}>
        {quantity}
      </Text>
      <Text style={fonts.largeFontLightGray}>
        {type}
      </Text>
    </View>
  );
};

export default FitExerciseStat;
