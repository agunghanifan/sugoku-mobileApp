import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, Button, View, TextInput, Alert } from "react-native";
import { useSelector, useDispatch } from 'react-redux'

export default function Home ({ navigation }) {
  const dispatch = useDispatch()
  const [yourName, setYourName] = useState('Player 1')
  const dataDifficulty = useSelector(state => state.gameReducer.dataDifficulty)

  function gotoGame (e, payload) {
    e.preventDefault()
    // Alert.alert(JSON.stringify(payload))
    navigation.navigate('Game Board', {
      username: payload.username,
      difficulty: payload.difficulty
    })
  }

  return (
    <View style={styles.container}>
      <View>
        <Text> Welcome </Text>
      </View>
      <View>
        <Text>Insert Your name below here</Text>
        <TextInput
          style={styles.input}
          onChangeText={setYourName}
          value={yourName}
          placeholder="Your Name"
          keyboardType="default"
        />
      </View>
      <View>
        <Text>Insert Your difficulty</Text>
        <View style={styles.fixToText}>
          {
            dataDifficulty.map((difficultyElement, index) => {
              return <Button key={index}
              title={difficultyElement.difficulty}
              onPress={(e) => gotoGame(e, {username: yourName , difficulty: difficultyElement.difficulty})}
              />
            })
          }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  input: {
    height: 30,
    width: 100,
    margin: 12,
    borderWidth: 1,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

