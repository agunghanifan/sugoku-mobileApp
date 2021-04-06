import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import RowBox from '../components/RowBox'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBoard, solveSelfBoard } from '../store/actions/GameAction'


export default function GameBoard() {
  const dispatch = useDispatch()
  const boardDisplay = useSelector(state => state.gameReducer.boardDisplay)
  const loading = useSelector(state => state.gameReducer.loading)
  const errorBoard = useSelector(state => state.gameReducer.errorBoard)

  useEffect(() => {
    dispatch(fetchBoard())
  }, [boardDisplay.length])

  const onPressSolve = (e) => {
    e.preventDefault()
    dispatch(solveSelfBoard(boardDisplay))
  }

  const onPressValidate = (e) => {
    e.preventDefault()
    dispatch()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Sudoku</Text>
      <Text>
        {
          loading || boardDisplay.board.length < 1 ? <Text>Loading ...</Text> :
          errorBoard ? <Text>We found some Errors, here {JSON.stringify(errorBoard)}</Text> :
          boardDisplay.board.map((row, index) => {
            return <RowBox key={index} row={row} />
          })
        }
      </Text>
      <Button style={styles.button}
        onPress={(e) => onPressSolve(e)}
        title="Click me to solve!"
        color="#91c788"
      ></Button>
      <Button style={styles.button}
        onPress={(e) => onPressValidate(e)}
        title="Submit your answer!"
        color="#91c788"
      ></Button>
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
