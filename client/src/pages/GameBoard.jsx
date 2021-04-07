import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, 
  TouchableWithoutFeedback, Keyboard, Platform, ActivityIndicator } from 'react-native';
import RowBox from '../components/RowBox'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBoard, solveSelfBoard, submitBoard, setStatusBoard } from '../store/actions/GameAction'


export default function GameBoard({ route, navigation }) {
  const { username, difficulty } = route.params
  console.log(username, difficulty)
  const dispatch = useDispatch()
  const boardInitial = useSelector(state => state.gameReducer.boardInitial)
  const boardDisplay = useSelector(state => state.gameReducer.boardDisplay)
  const loading = useSelector(state => state.gameReducer.loading)
  const errorBoard = useSelector(state => state.gameReducer.errorBoard)
  const status = useSelector(state => state.gameReducer.status)

  useEffect(() => {
    dispatch(fetchBoard(String(difficulty)))
  }, [])

  const onPressSolve = (e) => {
    e.preventDefault()
    dispatch(solveSelfBoard(boardInitial))
  }

  useEffect(() => {
    if (status === 'solved') {
      const timing = setInterval(() => {
        navigation.replace('Finish', {
          username: username
        })
        dispatch(setStatusBoard(''))
        clearInterval(timing)
      }, 3000);
    }
  }, [status, errorBoard])

  const onPressValidate = (e) => {
    e.preventDefault()
    dispatch(submitBoard(boardDisplay))
  }

  const refetch = (e) => {
    e.preventDefault()
    dispatch(fetchBoard(String(difficulty)))
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Welcome to Sudoku, {String(username)}</Text>
          <View style={styles.header}>
            <Text>
              {
                loading ? <ActivityIndicator size="large" /> :
                status === "broken" || status === "unsolved"? <Text>Your Sudoku status is Unsolved, try again!</Text> :
                status ? <Text>Congratulations, your sudoku is completed!</Text> :
                <Text style={styles.center}>Lets Play, fill the zero number in below here, your difficulty is "{difficulty}"</Text>
              }
            </Text>
          </View>
          <Text>
            {
              loading || boardDisplay.board.length < 1 ? <ActivityIndicator size="large" /> :
              errorBoard ? <Text>We found some Errors, please press another puzzle</Text> :
              boardDisplay.board.map((row, index) => {
                return <RowBox key={index} row={row} i={index} />
              })
            }
          </Text>
          <Button style={styles.button}
            onPress={(e) => refetch(e)}
            title="Click me to another puzzle"
            color="#ffaaa7"
          ></Button>
          <Button style={styles.button}
            onPress={(e) => onPressSolve(e)}
            title="Wanna see some magic?"
            color="#ffd3b4"
          ></Button>
          <Button style={styles.button}
            onPress={(e) => onPressValidate(e)}
            title="Submit your answer!"
            color="#91c788"
          ></Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 20
  },
  inner: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    textAlign: 'center',
  }
});
