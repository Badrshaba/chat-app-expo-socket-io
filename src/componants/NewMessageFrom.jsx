import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
const NewMessageFrom = ({username,socket,room}) => {
    const [content,setContent] = useState('')
    const onSend =()=>{
        if(content.trim()=='') return
        const message = {
            room,
            username,
            content:content.trim(),
            time: new Date().getTime()
        }
        socket.emit('send_message',message)
        setContent('')
    }
  return (
    <View style={styles.contenar} >
      <TextInput
      style={styles.input}
      value={content}
      onChangeText={setContent}
      multiline
      />
      <Pressable style={styles.btn} disabled={content===''} onPress={onSend} >
    <Text>
    <Ionicons name="send" size={26} color={content===''?'gray':'blue'} />
    </Text>
      </Pressable>
    </View>
  )
}

export default NewMessageFrom

const styles = StyleSheet.create({
    contenar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:5
    },
    input:{
        flex:1,
        borderWidth:1,
        borderRadius:6,
        paddingHorizontal:10,
        paddingVertical:5,
        marginRight:5
    },
 
})