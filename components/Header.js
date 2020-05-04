import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Header = (props) => {
  return (
    <View>
      {props.face === true ? 
        <Image
        style= {styles.img}
        source={{
          uri: 'https://scontent.fewr1-5.fna.fbcdn.net/v/t1.0-9/15697817_10155596529823294_3274696557151618243_n.jpg?_nc_cat=107&_nc_sid=05277f&_nc_ohc=wZik3HE-P5UAX8P9otL&_nc_ht=scontent.fewr1-5.fna&oh=d422f7811b96b1a037cde2e97cbd62e0&oe=5ED668BF'
        }}
      />
      : 
      <Image
        style= {styles.img}
         source={{
          uri: "https://scontent.fewr1-2.fna.fbcdn.net/v/t1.0-9/65437496_10158522066788294_6668811976950415360_o.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_ohc=jyOw7ZB2R7MAX_M9pb0&_nc_ht=scontent.fewr1-2.fna&oh=6302b0f13f8816a765de6328d23f27e8&oe=5ED55675"
        }}
      />
      } 
      
      <TouchableOpacity
          onPress={() => props.changeFace()}
          underlayColor='#fff'
          style={styles.btn}
          >
            {props.face === true ? 
            <Text style={styles.txt}> Click to take it away! </Text> 
            :
            <Text style={styles.txt}> Click to Give Cindy Tequila</Text>
            }
    </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    fontSize: 60
  },
  btn: {
    borderRadius: 10,
    borderWidth: 2
  },
  img: {
    width: 250,
    height: 250,
    marginBottom: 100,
    borderRadius: 8
  },
  txt: {
    textAlign: "center"
  }
});

export default Header
