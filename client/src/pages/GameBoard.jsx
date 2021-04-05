import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
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

  return (
    <View style={styles.container}>
      <Text>Hello Agung</Text>
      <Text>
        {
          loading || board.length < 1 ? <Text>Loading ...</Text> :
          errorBoard ? <Text>We found some Errors, here {JSON.stringify(errorBoard)}</Text> :
          board.map(row => {
            return <RowBox key={row} row={row} />
          })
        }
      </Text>
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
});
