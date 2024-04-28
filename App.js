
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View ,StatusBar} from 'react-native';
import Welcome from './src/screens/Welcome';
import Chat from './src/screens/Chat';

export default function App() {
  const [username,setUsername] = useState('')
  const [room,setRoom] = useState('')
  const saveUsername = (name)=>{
    setUsername(name)
  }
  if(username===''){
    return <SafeAreaView style={styles.container}>
      <Welcome saveUsername={saveUsername} room={room} setRoom={setRoom} />
    </SafeAreaView>
  }
  return (
    <View style={styles.container}>
      <Chat username={username} room={room} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:StatusBar.currentHeight
  },
});
