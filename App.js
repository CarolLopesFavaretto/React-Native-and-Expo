import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cesta from './src/Pages/Cesta';

export default function App() {
  return (
    <View>
      <Cesta />
      <StatusBar style="auto" />
    </View>
  );
}


