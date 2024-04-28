import { StyleSheet, Text, View, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import Message from '../componants/Message'
import NewMessageFrom from '../componants/NewMessageFrom'
import io from 'socket.io-client'



const socket = io( Platform.OS =='web' ? 'http://localhost:4000' :'http://192.168.137.1:4000')
const Chat = ({username,room}) => {
    const [message, setMessage] = useState([])
    useEffect(()=>{
        socket.emit('join_room',room)
        socket.on('new_message',(data)=>{
        console.log('message',data);
        setMessage(current=>{
            return [...current,data]
        })
        })
        console.log(Platform.OS);
    },[])
    const renderItem = ({item})=>(
        <Message username={username} message={item}/>
    )
  return (
    <KeyboardAvoidingView style={styles.keyboard}  >
    <FlatList
    data={message}
    renderItem={renderItem}
    keyExtractor={item=>item.id}
    contentContainerStyle={styles.flatList}
    showsVerticalScrollIndicator={false}
    />
    <NewMessageFrom username={username} socket={socket} room={room} />
    </KeyboardAvoidingView>
  )
}

export default Chat

const styles = StyleSheet.create({
    keyboard:{
     flex:1   ,
     paddingBottom:10
    },
    flatList:{
        paddingHorizontal:5,

    }
})