import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Header = (props) => {
  return (
    <View>
      {props.face === true ? 
        <Image
        style= {styles.img}
         source={{
          uri: 'https://scontent.fewr1-6.fna.fbcdn.net/v/t1.0-9/578391_10151762481348753_128908989_n.jpg?_nc_cat=102&_nc_sid=43edb5&_nc_ohc=bw593kkojrsAX8NkVxJ&_nc_ht=scontent.fewr1-6.fna&oh=15dda8fc59c8f92ee4bf0a1f7abf7505&oe=5ED2145E'
        }}
      />
      : 
      <Image
        style= {styles.img}
         source={{
          uri: 'https://scontent.fewr1-5.fna.fbcdn.net/v/t31.0-8/1402216_10151866328188795_1272302535_o.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_ohc=hp_3M-QfyZIAX9BTpSK&_nc_ht=scontent.fewr1-5.fna&oh=5d33b22e8240fad2f03c73f74b51a28a&oe=5ED360F9'
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
            <Text style={styles.txt}> Click to Give Evan a Kiss! </Text>
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
