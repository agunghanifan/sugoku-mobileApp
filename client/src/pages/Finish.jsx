import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Finish({ route, navigation }) {
  const { username } = route.params
  return (
    <View style={styles.container}>
      <Text>Congratulations {String(username)} to completed the game!</Text>
      <View style={styles.padding}>
        <Image
          style={styles.tinyLogo}
            source={{
              uri: 'https://media.giphy.com/media/vmtxnxveVUodG/giphy.gif',
            }}
          />
      </View>
      <Text>You can back to Home to play again.</Text>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Back to Home"
          color="#ffaaa7"
        />
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  header: {
    marginBottom: 20
  },
  tinyLogo: {
    width: 380,
    height: 200,
    alignSelf: 'center',
  }
});
