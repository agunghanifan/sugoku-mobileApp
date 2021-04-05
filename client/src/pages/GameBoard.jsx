import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import RowBox from '../components/RowBox'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBoard } from '../store/actions/GameAction'


export default function GameBoard() {
  const dispatch = useDispatch()
  const board = useSelector(state => state.gameReducer.board)
  console.log(board)
  const loading = useSelector(state => state.gameReducer.loading)
  const errorBoard = useSelector(state => state.gameReducer.errorBoard)

  useEffect(() => {
    dispatch(fetchBoard())
  }, [])

  const onPressValidate = (e) => {
    e.preventDefault()

  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Sudoku</Text>
      <Text>
        {
          loading || board.length < 1 ? <Text>Loading ...</Text> :
          errorBoard ? <Text>We found some Errors, here {JSON.stringify(errorBoard)}</Text> :
          board.map(row => {
            return <RowBox key={row} row={row} />
          })
        }
      </Text>
      <Button style={styles.button}
        onPress={(e) => onPressValidate(e)}
        title="Submit your input"
        color="#91c788"
        accessibilityLabel="Learn more about this purple button"
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
