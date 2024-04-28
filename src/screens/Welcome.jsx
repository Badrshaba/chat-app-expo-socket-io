import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";



const Welcome = ({ saveUsername,setRoom,room }) => {
  const [username, setUsername] = useState("");


  return (
    <View style={styles.container}>
      <Text style={styles.title} >Welcome</Text>
      <Text style={styles.caption}>name</Text>
      <TextInput style={styles.input} value={username} onChangeText={setUsername} />
      <Text style={styles.caption}>room</Text>
      <TextInput style={styles.input} value={room} onChangeText={setRoom} />
     
      <Pressable style={styles.button} onPress={()=>saveUsername(username)}>
        <Text style={styles.btnCaption} >Entergister</Text>
      </Pressable>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontWeight:'bold',
    fontSize:30,
    marginBottom:20
  },
  caption:{
    fontSize:18,
    marginBottom:10
  },
  input:{
    borderWidth:1,
    borderColor:'grey',
    borderRadius:5,
   marginBottom:20,
   height:40,
   width:100,
   paddingHorizontal:10,
   textAlign:'center'
  },
  button:{
    backgroundColor:'blue',
    borderRadius:10,
    color:'white',
    padding:10
  },
  btnCaption:{
fontWeight:'bold',
fontSize:16,
color:'white'
  }
});
