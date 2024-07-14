import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, ScrollView } from "react-native";
import FitImage from "./FitImage";
import FitHealthStat from "./FitHealthStat";
import FitExerciseStat from "./FitExersiceStar";
import FitChart from "./FitChar";
import AdditionalStats from "./Stats";
const { width } = Dimensions.get("screen");

const GoogleFit = () => {
  const [stepsData, setStepsData] = useState({
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [10000, 9000, 2000, 3000, 8000, 11000, 10500],
        baseline: 10000,
      },
    ],
  });

  const [caloriesData, setCaloriesData] = useState({
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [3000, 2500, 1500, 1800, 2000, 2200, 2100],
        baseline: 2500,
      },
    ],
  });

  const [kmData, setKmData] = useState({
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [8, 7.5, 5, 6, 7, 6.5, 8],
        baseline: 7.5,
      },
    ],
  });

  const [sleepData, setSleepData] = useState({
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [7, 8, 6.5, 7.5, 6, 8, 7],
        baseline: 8,
      },
    ],
  });

  // Simular carga inicial de datos y actualización
  useEffect(() => {
    const stepsInterval = setInterval(() => {
      const newStepsData = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            data: [
              Math.floor(Math.random() * 10000), // Simulación de datos aleatorios
              Math.floor(Math.random() * 10000),
              Math.floor(Math.random() * 10000),
              Math.floor(Math.random() * 10000),
              Math.floor(Math.random() * 10000),
              Math.floor(Math.random() * 10000),
              Math.floor(Math.random() * 10000),
            ],
            baseline: 10000,
          },
        ],
      };
      setStepsData(newStepsData);
    }, 5000); // Actualizar cada 5 segundos (simulado)

    const caloriesInterval = setInterval(() => {
      const newCaloriesData = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            data: [
              Math.floor(Math.random() * 3000), // Simulación de datos aleatorios
              Math.floor(Math.random() * 3000),
              Math.floor(Math.random() * 3000),
              Math.floor(Math.random() * 3000),
              Math.floor(Math.random() * 3000),
              Math.floor(Math.random() * 3000),
              Math.floor(Math.random() * 3000),
            ],
            baseline: 2500,
          },
        ],
      };
      setCaloriesData(newCaloriesData);
    }, 7000); // Actualizar cada 7 segundos (simulado)

    const kmInterval = setInterval(() => {
      const newKmData = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            data: [
              5 + Math.random(), // Simulación de datos aleatorios
              6 + Math.random(),
              7 + Math.random(),
              5 + Math.random(),
              6.5 + Math.random(),
              7 + Math.random(),
              8 + Math.random(),
            ],
            baseline: 3,
          },
        ],
      };
      setKmData(newKmData);
    }, 6000); // Actualizar cada 6 segundos (simulado)

    const sleepInterval = setInterval(() => {
      const newSleepData = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            data: [
              7 + Math.random(), // Simulación de datos aleatorios
              8 + Math.random(),
              6.5 + Math.random(),
              7.5 + Math.random(),
              6 + Math.random(),
              8 + Math.random(),
              7 + Math.random(),
            ],
            baseline: 8,
          },
        ],
      };
      setSleepData(newSleepData);
    }, 8000); // Actualizar cada 8 segundos (simulado)

    return () => {
      clearInterval(stepsInterval);
      clearInterval(caloriesInterval);
      clearInterval(kmInterval);
      clearInterval(sleepInterval);
    }; // Limpiar los intervalos al desmontar el componente
  }, []);

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
        {/*<FitHealthStat
          iconBackgroundColor="#183b57"
          iconColor="#0e8df2"
          actual="75"
          over="/100"
          type="Move Min"
        />
        <FitHealthStat
          iconBackgroundColor="#124b41"
          iconColor="#03ddb3"
          actual="30"
          over="/20"
          type="Heart Pts"
          doubleIcon
        />*/}
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
          <FitExerciseStat
            quantity={stepsData.datasets[0].data[stepsData.datasets[0].data.length - 1].toString()}
            type="Pasos"
          />
        </View>
        <View>
          <Text style={{ color: "#9a9ba1", fontSize: 40, fontWeight: "100" }}>
            |
          </Text>
        </View>
        <View>
          <FitExerciseStat
            quantity={caloriesData.datasets[0].data[caloriesData.datasets[0].data.length - 1].toString()}
            type="Calorias"
          />
        </View>
        <View>
          <Text style={{ color: "#9a9ba1", fontSize: 40, fontWeight: "100" }}>
            |
          </Text>
        </View>
        <View>
          <FitExerciseStat
            quantity={kmData.datasets[0].data[kmData.datasets[0].data.length - 1].toFixed(1)}
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
        <FitChart
          title={"Completar 10,000 pasos diarios"}
          data={stepsData}
          baseline={10000}
        />
        <FitChart
          title={"Consumo de Calorías"}
          description={"Hoy"}
          data={caloriesData}
          baseline={2500}
        />
        <FitChart
          title={"Distancia Recorrida"}
          description={"Hoy"}
          data={kmData}
          baseline={3}
        />
        <FitChart
          title={"Horas de Sueño"}
          description={"Esta semana"}
          data={sleepData}
          baseline={8}
        />
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
        {/*<AdditionalStats
          name="Ritmo cardiaco"
          description="N"
        />
        <AdditionalStats name="Peso" description="69 kg • Mar 14" />
        <AdditionalStats
          name="Presión sanguínea"
          description="120/70 mmHg • Apr 27, 2019"
        />*/}
      </View>
    </ScrollView>
  );
};

export default GoogleFit;
