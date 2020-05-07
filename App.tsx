import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
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
      <ImageBackground
        style= {styles.backgroundImage}
        underlayColor='white'
         source={{
          uri: "https://i.redd.it/kc4rp13i8d431.jpg"
        }}
        >
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text}> "Ramzy you done fucked up" </Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.view}>

        </View>
      {/* <FetchLocation getLocation={getLocation} location={location}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
  },
  backgroundImage: {
    flex: 1,
  },
  btn: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 500,
    borderRadius: 10,
    borderWidth: 2,
    color: "white"
  },
  text: {
    textAlign: "center"
  },
  view:{
    borderWidth: 10,
    borderColor: "white",
    height: 100,
    width: 100,
    marginTop: 100
  }

});
