import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Finish({ navigation }) {
  return (
    <View>
      <Text> Congratulations to completed the game!, you can back to Home to play again.</Text>
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
    justifyContent: 'center',
  },
  header: {
    marginBottom: 20
  }
});
