import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useSelector, useDispatch} from 'react-redux'
import { setFetchBoard } from '../store/actions/GameAction'

export default function ColBox(props) {
  let { col, i, j } = props
  const dispatch = useDispatch()
  const boardDisplay = useSelector(state => state.gameReducer.boardDisplay)
  const boardInitial = useSelector(state => state.gameReducer.boardInitial)
  const [newCol, setNewCol] = useState(col)

  function changeBoardNumber () {
    let localBoard = boardDisplay.board.map( row => [...row])
    localBoard[i][j] = Number(newCol)
    dispatch(setFetchBoard(localBoard))
  }

  return (
    <View>
      {
        newCol > 0 && newCol === boardInitial.board[i][j] ? 
        <Text
        style={styles.inputCannotEdited}
        >{newCol}</Text> 
        :
        <TextInput
        style={styles.input}
        onChangeText={setNewCol}
        onEndEditing={changeBoardNumber}
        defaultValue={col > 0 ? String(col) : ''}
        maxLength={1}
        keyboardType='numeric'
        /> 
        // :
        // <TextInput
        // style={styles.input}
        // onChangeText={setNewCol}
        // onEndEditing={changeBoardNumber}
        // defaultValue=''
        // maxLength={1}
        // keyboardType='numeric'
        // />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  textCol: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: '#feffde',
    borderWidth: 1,
    borderStyle: 'solid',
    width: 40
  },
  input: {
    fontSize: 35,
    textAlign: 'center',
    backgroundColor: '#FFFCF7',
    height: 45,
    width: 40,
    borderWidth: 1,
  },
  inputCannotEdited: {
    fontSize: 35,
    textAlign: 'center',
    backgroundColor: '#A1B5D8',
    height: 45,
    width: 40,
    borderWidth: 1,
  }
})
