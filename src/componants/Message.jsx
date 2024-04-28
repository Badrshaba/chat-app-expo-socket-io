import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Message = ({message,username}) => {
  return (
    <View style={{
        alignSelf:username==message.username?'flex-end':'flex-start'
    }}>
    
      <Text style={[styles.content,{backgroundColor:username==message.username?'lightgreen':'lightgray'}]}>{message.content}</Text>
      <Text style={[styles.content]} >{message.username}</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
    content:{
        padding:10,
        borderRadius:6,
        marginBottom:5
    },
    username:{
        fontWeight:'bold',
        fontSize:14
    }
})