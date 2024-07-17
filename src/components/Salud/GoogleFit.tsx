//'../../../assets/utils/dataService';
//'../../../assets/utils/SensorService'
import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import { Accelerometer, Pedometer } from 'expo-sensors';
import FitImage from './FitImage';
import FitExerciseStar from './FitExersiceStar';
import FitChar from './FitChar';

const { width } = Dimensions.get("screen");

interface FitDataSets {
  data: number[];
  baseline: number;
}

interface FitChartData {
  labels: string[];
  datasets: FitDataSets[];
}

const GoogleFit = () => {
  const [stepsData, setStepsData] = useState<FitChartData | null>(null);
  const [caloriesData, setCaloriesData] = useState<FitChartData | null>(null);
  const [kmData, setKmData] = useState<FitChartData | null>(null);
  const [sleepData, setSleepData] = useState<FitChartData | null>(null);
  const [accelData, setAccelData] = useState({ x: 0, y: 0, z: 0 });
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    const fetchSensorData = async () => {
      Accelerometer.setUpdateInterval(1000);
      const accelerometerSubscription = Accelerometer.addListener((accelerometerData) => {
        setAccelData(accelerometerData);
      });

      const pedometerSubscription = Pedometer.watchStepCount((result) => {
        setStepCount(result.steps);
      });

      return () => {
        accelerometerSubscription && accelerometerSubscription.remove();
        pedometerSubscription && pedometerSubscription.remove();
      };
    };

    fetchSensorData();
  }, []);

  useEffect(() => {
    const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dummyData = Array(7).fill(0);

    setStepsData({ labels, datasets: [{ data: dummyData, baseline: 10000 }] });
    setCaloriesData({ labels, datasets: [{ data: dummyData, baseline: 2500 }] });
    setKmData({ labels, datasets: [{ data: dummyData, baseline: 3 }] });
    setSleepData({ labels, datasets: [{ data: dummyData, baseline: 8 }] });
  }, []);

  // Calcular distancia y calorías en función de los pasos
  const distance = (stepCount * 0.762) / 1000; // Convertimos a kilómetros
  const calories = stepCount * 0.04;

  return (
    <ScrollView style={{ backgroundColor: "#1f2026" }}>
      <View>
        <FitImage />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginLeft: width * 0.15,
          marginRight: width * 0.15,
          marginBottom: width * 0.05,
        }}
      >
        {/* Otros componentes */}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginLeft: width * 0.1,
          marginRight: width * 0.1,
          marginBottom: width * 0.05,
        }}
      >
        <View>
          <FitExerciseStar
            quantity={stepCount.toString()}
            type="Pasos"
          />
        </View>
        <View>
          <Text style={{ color: "#9a9ba1", fontSize: 40, fontWeight: "100" }}>
            |
          </Text>
        </View>
        <View>
          <FitExerciseStar
            quantity={calories.toFixed(2)}
            type="Calorías"
          />
        </View>
        <View>
          <Text style={{ color: "#9a9ba1", fontSize: 40, fontWeight: "100" }}>
            |
          </Text>
        </View>
        <View>
          <FitExerciseStar
            quantity={distance.toFixed(2)}
            type="Km"
          />
        </View>
        <View>
          <Text style={{ color: "#9a9ba1", fontSize: 40, fontWeight: "100" }}>
            |
          </Text>
        </View>
      </View>
      <View>
        {stepsData && <FitChar title={"Completar 10,000 pasos diarios"} data={stepsData} baseline={10000} />}
        {caloriesData && <FitChar title={"Consumo de Calorías"} description={"Hoy"} data={caloriesData} baseline={2500} />}
        {kmData && <FitChar title={"Distancia Recorrida"} description={"Hoy"} data={kmData} baseline={3} />}
        {sleepData && <FitChar title={"Horas de Sueño"} description={"Esta semana"} data={sleepData} baseline={8} />}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "#fff" }}>
          Sensor X: {accelData.x.toFixed(2)}
        </Text>
        <Text style={{ color: "#fff" }}>
          Sensor Y: {accelData.y.toFixed(2)}
        </Text>
        <Text style={{ color: "#fff" }}>
          Sensor Z: {accelData.z.toFixed(2)}
        </Text>
      </View>
    </ScrollView>
  );
};

export default GoogleFit;
