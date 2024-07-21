// FitChart.tsx
import React from "react";
import { View, Dimensions, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";
import styles from '../../../assets/style/styleFitChart';

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
          width={Dimensions.get("window").width}
          height={220}
          yAxisLabel=""
          chartConfig={{
            backgroundColor: "#1f2026",
            backgroundGradientFrom: "#1f2026",
            backgroundGradientTo: "#1f2026",
            fillShadowGradient: "#7262f8",
            fillShadowGradientOpacity: 1,
            color: (opacity = 1) => `rgba(${154}, ${155}, ${161}, ${opacity})`,
            labelColor: (opacity = 1) =>
              `rgba(${154}, ${155}, ${161}, ${opacity})`,
            style: {
              borderRadius: 16,
              right: 0,
              paddingRight: 64,
            },
            barPercentage: 0.5,
            decimalPlaces: 0,
          }}
          showBarTops={false}
          fromZero
        />
      </View>
    </View>
  );
};

export default FitChart;
