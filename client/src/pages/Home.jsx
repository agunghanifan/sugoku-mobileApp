import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, Button, View, TextInput, Image,
  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform  } from "react-native";
import { useSelector, useDispatch } from 'react-redux'

export default function Home ({ navigation }) {
  const dispatch = useDispatch()
  const [yourName, setYourName] = useState('People')
  const dataDifficulty = useSelector(state => state.gameReducer.dataDifficulty)
  const data = []

  function gotoGame (e, payload) {
    e.preventDefault()
    // Alert.alert(JSON.stringify(payload))
    if (!payload.username) payload.username = "People"
    navigation.navigate('Game Board', {
      username: payload.username,
      difficulty: payload.difficulty
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.header}>
            <Text> Welcome to Sudoku Board </Text>
          </View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://media.giphy.com/media/l41Yy6jvn3BXYDRu0/giphy.gif',
            }}
          />
          <View style={styles.inputSection}>
            <Text>Insert Your name below here</Text>
            <TextInput
              style={styles.input}
              onChangeText={setYourName}
              value={yourName}
              placeholder="Your Name"
              keyboardType="default"
              textAlign= 'center'
            />
          </View>
          <View style={styles.difficulty}>
            <Text>Insert your difficulty</Text>
            <View style={styles.fixToText}>
              {
                dataDifficulty.map((difficultyElement, index) => {
                  data.push(index + 1)
                  return <Button key={index}
                  title={difficultyElement.difficulty}
                  onPress={(e) => gotoGame(e, {username: yourName , difficulty: difficultyElement.difficulty})}
                  />
                })
              }
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
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
  header: {
    alignItems: 'center',
  },
  inputSection: {
    alignItems: 'center'
  },
  difficulty: {
    alignItems: 'center'
  },
  tinyLogo: {
    width: 300,
    height: 300,
    alignSelf: 'center',

  },

});

