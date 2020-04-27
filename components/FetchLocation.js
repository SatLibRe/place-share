import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const FetchLocation = (props) => {
  return (
    <View >
     <TouchableOpacity
          style={styles.locationButton}
          onPress={() => props.getLocation() }
          underlayColor='#fff'>
          <Text style={styles.getLocationText}> Get Location</Text>
 </TouchableOpacity>
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
    }
});

export default FetchLocation
