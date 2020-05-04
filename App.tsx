import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from "./components/Header";
import FetchLocation from "./components/FetchLocation";

export default function App() {

  const [meal, setMeal] = useState("Bologna")
  const [face, setFace] = useState(false)
  const [location, setLocation] = useState({})
  

  const changeDinner = () => {
    return meal === "Bologna" ? setMeal("Ass Booty") : setMeal("Bologna")
  }

  const changeFace = () => {
    return setFace(!face)
  }

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      })
    }, err => console.log(err)); 
  }

  return (
    <View style={styles.container}>
      {/* <Header meal={meal} changeDinner={changeDinner} changeFace={changeFace} face={face}/> */}
      <FetchLocation getLocation={getLocation} location={location}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
