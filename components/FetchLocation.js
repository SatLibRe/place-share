import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const FetchLocation = (props) => {
  console.log(props.location)
  return (
    <View >
     <TouchableOpacity
          style={styles.locationButton}
          onPress={() => props.getLocation() }
          underlayColor='#fff'>
          <Text style={styles.getLocationText}> Get Location</Text>
    </TouchableOpacity>
    <MapView
    style= {styles.map}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    region={props.location}
  >
    <MapView.Marker coordinate={props.location}/>
    </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
    locationButton: {
        backgroundColor: "yellow",
        height: 100,
        borderWidth: 1,
        borderRadius: 20
    },
    getLocationText: {
        paddingTop: 20,
        fontSize: 40,
        color: "red"
    }, 
    map: {
      height: 250,
      width: 250
    }
});

export default FetchLocation
