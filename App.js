import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/Pages/Index';
import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,  
} from '@expo-google-fonts/montserrat';

export default function App() {

const [ fontes ] = useFonts ({
  'MontserratRegular': Montserrat_400Regular,
  'MontserratBold': Montserrat_700Bold,
});

  if(!fontes){
    return <View/>
  }

  return (
    <View>
      <Index />
      <StatusBar style="auto" />
    </View>
  );
}


