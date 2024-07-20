import React, { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import Navbar from "../routes/NavBar";

const requestPermissions = async () => {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACTIVITY_RECOGNITION
    );
  } catch (err) {
    console.warn(err);
  }
};
export default function Main() {
  useEffect(() => {
    requestPermissions();
  }, []);
  return (
    <Navbar />
  );
}
