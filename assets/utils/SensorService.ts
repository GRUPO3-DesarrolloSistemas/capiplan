// SensorService.ts
import { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';

interface SensorData {
  x: number;
  y: number;
  z: number;
  steps: number[];
  calories: number[];
  km: number[];
  sleep: number[];
}

export const useSensorData = (): SensorData => {
  const [data, setData] = useState<SensorData>({
    x: 0,
    y: 0,
    z: 0,
    steps: [],
    calories: [],
    km: [],
    sleep: []
  });

  useEffect(() => {
    const subscription = Accelerometer.addListener(accelerometerData => {
      setData(prevData => ({
        ...prevData,
        x: accelerometerData.x,
        y: accelerometerData.y,
        z: accelerometerData.z
      }));
    });

    Accelerometer.setUpdateInterval(1000); // Actualizar cada segundo

    return () => subscription.remove();
  }, []);

  // Aquí puedes implementar la lógica para obtener y actualizar los datos de pasos, calorías, km y sueño

  return data;
};
