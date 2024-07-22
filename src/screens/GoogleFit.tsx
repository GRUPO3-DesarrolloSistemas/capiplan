import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Pedometer } from 'expo-sensors';
import { Audio } from 'expo-av';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/FontAwesome';
import FitImage from "../components/Salud/FitImage";
import FitExersiceStar from "../components/Salud/FitExersiceStar";
import FitChar from "../components/Salud/FitChar";
import { sendDataToOpenAI } from '../utils/functions/openAIService';
import styles from '../../assets/style/styleGoogleFit';
import { fonts } from "../themes/fonts";

interface FitDataSets {
  data: number[];
  baseline: number;
}

interface FitChartData {
  labels: string[];
  datasets: FitDataSets[];
}

const GoogleFit = () => {
  const [steps, setSteps] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);
  const [calories, setCalories] = useState<number>(0);
  const [suggestion, setSuggestion] = useState<string>('');
  const [weeklySteps, setWeeklySteps] = useState<number[]>(new Array(7).fill(0));
  const [weeklyDistance, setWeeklyDistance] = useState<number[]>(new Array(7).fill(0));
  const [weeklyCalories, setWeeklyCalories] = useState<number[]>(new Array(7).fill(0));
  const [collapsed, setCollapsed] = useState(true);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(require('../../assets/sounds/notificacion.mp3'));
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync(); // Unload the sound when the component unmounts
      }
      : undefined;
  }, [sound]);

  useEffect(() => {
    const startPedometer = async () => {
      const isAvailable = await Pedometer.isAvailableAsync();
      if (isAvailable) {
        Pedometer.watchStepCount(result => {
          setSteps(result.steps);
          const calculatedDistance = result.steps * 0.0008; // 0.8 metros por paso
          setDistance(calculatedDistance);
          const calculatedCalories = result.steps * 0.04; // 0.04 calorías por paso
          setCalories(calculatedCalories);
        });
      } else {
        console.log("Pedometer is not available");
      }
    };

    startPedometer();
  }, []);

  useEffect(() => {
    const today = new Date().getDay();
    const updatedWeeklySteps = [...weeklySteps];
    const updatedWeeklyDistance = [...weeklyDistance];
    const updatedWeeklyCalories = [...weeklyCalories];

    updatedWeeklySteps[today] = steps;
    updatedWeeklyDistance[today] = distance;
    updatedWeeklyCalories[today] = calories;

    setWeeklySteps(updatedWeeklySteps);
    setWeeklyDistance(updatedWeeklyDistance);
    setWeeklyCalories(updatedWeeklyCalories);
  }, [steps, distance, calories]);

  useEffect(() => {
    const fetchSuggestion = async () => {
      try {
        const suggestion = await sendDataToOpenAI(steps, distance, calories);
        setSuggestion(suggestion);
        playSound(); // Reproduce el sonido cuando se recibe la sugerencia
      } catch (error) {
        console.error('Error fetching suggestion from OpenAI:', error);
      }
    };

    const millisUntilTestTime = 5 * 60 * 1000; // 5 minutos a partir de ahora

    const timeout = setTimeout(() => {
      fetchSuggestion();
      setInterval(fetchSuggestion, 24 * 60 * 60 * 1000); // Cada 24 horas
    }, millisUntilTestTime);

    return () => clearTimeout(timeout);
  }, [steps, distance, calories]);

  useEffect(() => {
    const resetDailyData = () => {
      setSteps(0);
      setDistance(0);
      setCalories(0);
    };

    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    const millisUntilMidnight = nextMidnight.getTime() - now.getTime();

    const midnightTimeout = setTimeout(() => {
      resetDailyData();
      setInterval(resetDailyData, 24 * 60 * 60 * 1000); // Cada 24 horas a la medianoche
    }, millisUntilMidnight);

    return () => clearTimeout(midnightTimeout);
  }, []);

  const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const stepsData: FitChartData = {
    labels,
    datasets: [{ data: weeklySteps, baseline: 10000 }],
  };

  const distanceData: FitChartData = {
    labels,
    datasets: [{ data: weeklyDistance, baseline: 8 }],
  };

  const caloriesData: FitChartData = {
    labels,
    datasets: [{ data: weeklyCalories, baseline: 2500 }],
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <FitImage />
      </View>
      <View style={styles.fitExerciseStatsContainer}>
        <View>
          <FitExersiceStar
            quantity={steps.toString()}
            type="Pasos"
          />
        </View>
        <View>
          <Text style={styles.fitExerciseStatText}>
            |
          </Text>
        </View>
        <View>
          <FitExersiceStar
            quantity={calories.toString()}
            type="Calorías"
          />
        </View>
        <View>
          <Text style={styles.fitExerciseStatText}>
            |
          </Text>
        </View>
        <View>
          <FitExersiceStar
            quantity={distance.toFixed(2)}
            type="Km"
          />
        </View>
      </View>
      <View>
        {stepsData && <FitChar title={"Pasos"} description={" "} data={stepsData} baseline={10000} />}
        {distanceData && <FitChar title={"Distancia Recorrida"} description={"km"} data={distanceData} baseline={8} />}
        {caloriesData && <FitChar title={"Consumo de Calorías"} description={"cal"} data={caloriesData} baseline={2500} />}
      </View>
      <TouchableOpacity onPress={toggleExpanded} style={styles.accordionHeader}>
        <Icon name="flash" size={25} style={styles.accordionHeaderIcon}></Icon>
        <Text style={styles.accordionHeaderText}>Generar Sugerencia</Text>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <View style={styles.accordionContent}>
          <Text style={fonts.mediumFontGray}>{suggestion}</Text>
        </View>
      </Collapsible>
    </ScrollView>
  );
};

export default GoogleFit;
