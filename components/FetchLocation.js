import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const FetchLocation = (props) => {
  console.log(props.location)
  return (
    <View >
        <MapView
        style= {styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: 95.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={props.location}
      >
        <MapView.Marker coordinate={props.location}/>
        </MapView>
      <TouchableOpacity
            style={styles.locationButton}
            onPress={() => props.getLocation() }
            underlayColor='#fff'>
            <Text style={styles.text}> Get Location</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    locationButton: {
        backgroundColor: "black",
        height: 50,
        borderWidth: 4,
        width: 125,
        borderRadius: 20,
        borderColor: "pink",
        marginLeft: "15%",
        marginTop: "5%"
    },
    text: {
      color: "pink",
      textAlign: "center",
      marginTop: "9%"
    },
    map: {
      height: 250,
      width: 250,
      borderRadius: 8
    }
});

export default FetchLocation
