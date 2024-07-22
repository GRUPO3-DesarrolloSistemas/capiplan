// FitChart.tsx
import React from "react";
import { View, Dimensions, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";
import styles from '../../../assets/style/styleFitChart';
import { width } from "../../constants/constants";
import { colors } from "../../themes/colors";

interface FitDataSets {
  data: number[];
  baseline: number;
}

interface FitChartData {
  labels: string[];
  datasets: FitDataSets[];
}

interface FitChartProps {
  data: FitChartData;
  title: string;
  description?: string;
  baseline: number;
}

const FitChart = (props: FitChartProps) => {
  const { data, title, description, baseline } = props;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {title}
        </Text>
        {description && (
          <Text style={styles.description}>
            {description}
          </Text>
        )}
      </View>
      <View>
        <BarChart
          style={styles.chart}
          yAxisSuffix=""
          data={data}
          width={width - 50}
          height={220}
          yAxisLabel=""
          chartConfig={{
            backgroundColor: "#1f2026",
            backgroundGradientFrom: colors.white,
            backgroundGradientTo: colors.white,
            fillShadowGradient: colors.lightPurple,
            fillShadowGradientOpacity: 1,
            color: (opacity) => `rgba(0,0,0, 0.1)`,
            labelColor: (opacity) =>
              `rgba(0,0,0, 0.7)`,
            style: {
            },
            barPercentage: 0.5,
            decimalPlaces: 0,
          }}
          showBarTops={false}
          fromZero
        />
        <View style={styles.horizontalSeparator}></View>
      </View>
    </View>
  );
};

export default FitChart;
