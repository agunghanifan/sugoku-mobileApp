import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Finish({ route, navigation }) {
  const { username, status } = route.params
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{status === "finish" ? `Congratulations ${String(username)}, to completed the game!` : `Sorry ${String(username)}, you don't completed the game` }</Text>
          <View style={styles.padding}>
            <Image
              style={styles.tinyLogo}
                source={ status === "finish" ? {
                  uri: 'https://media.giphy.com/media/vmtxnxveVUodG/giphy.gif'
                } : { uri: 'https://media.giphy.com/media/a9xhxAxaqOfQs/giphy.gif'
              }}
              />
        </View>
      </View>
      <Text style={styles.text}>You can back to Home to play again.</Text>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Back to Home"
          color="#738290"
        />
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FC0A9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 20
  },
  tinyLogo: {
    width: 380,
    height: 200,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    margin: 50
  }
});
