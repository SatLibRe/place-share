import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import FetchLocation from "./components/FetchLocation";

export default function App() {

  const [meal, setMeal] = useState("Bologna")

  const changeDinner = () => {
    return meal === "Bologna" ? setMeal("Ass Booty") : setMeal("Bologna")
  }

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
    }, err => console.log(err)); 
  }

  return (
    <View style={styles.container}>
      {/* <Header meal={meal} changeDinner={changeDinner}/> */}
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
