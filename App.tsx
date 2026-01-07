import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [age,setAge] = useState('')
 let lowerLimit = (220-Number(age)) * 0.65
  let upperLimit = (220-Number(age)) * 0.85
  if(isNaN(Number(age))){
    upperLimit = 0;
    lowerLimit= 0;
  } 


  

  return (
    <View style={styles.container}>
      <Text>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput value={age} onChangeText={setAge}></TextInput>
      <Text>Lower limit : {lowerLimit}</Text>
      <Text>Upper limit : {upperLimit}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },input:{
    height : 30,
    margin: 10,
    borderWidth : 1,
    padding: 5,

    backgroundColor: '#fffff',
    borderColor : 'red'
  }
});
