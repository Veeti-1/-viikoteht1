import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [age,setAge] = useState('')
  
 let lowerLimit = (220-Number(age)) * 0.65 //laskee alarajan 
  let upperLimit = (220-Number(age)) * 0.85//laskee ylärajan
  if(isNaN(Number(age))  || age === ''){ //tarkistaa onko age jokin muu kuin numero tai tyhjä. jos on niin näyttää 0
    upperLimit = 0;
    lowerLimit= 0;
  } 


  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput style={styles.inputfield} value={age} onChangeText={setAge}></TextInput>
      <Text>Lower limit : {lowerLimit.toFixed(2)} bpm</Text>
      <Text>Upper limit : {upperLimit.toFixed(2)} bpm</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { //containerin automaattisesti luotu tyyli
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },inputfield: { //syöttökentän tyyli
    height : 30,
    margin: 10,
    width:40,
    borderWidth : 1,
    padding: 5,

    backgroundColor: '#fffff',
    borderColor : 'red'
  },title:{ //titlen "Heart Rate Limits Calculator" tyyli
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  }
});
