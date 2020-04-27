import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle} onPress={() => props.changeDinner()}>Whats for dinner? {props.meal}  </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: "red",
    fontSize: 60
  }
});

export default Header
