import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from "./components/Header";
import FetchLocation from "./components/FetchLocation";

export default function App() {

  const [meal, setMeal] = useState("Bologna")
  const [face, setFace] = useState(false)

  const changeDinner = () => {
    return meal === "Bologna" ? setMeal("Ass Booty") : setMeal("Bologna")
  }

  const changeFace = () => {
    console.log(face)
    return setFace(!face)
  }

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
    }, err => console.log(err)); 
  }

  return (
    <View style={styles.container}>
      <Header meal={meal} changeDinner={changeDinner} changeFace={changeFace} face={face} />
      <FetchLocation getLocation={getLocation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
