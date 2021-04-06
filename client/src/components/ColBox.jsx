import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function ColBox(props) {
  let { col } = props
  const [newCol, setNewCol] = useState(col)
  console.log(newCol, 'ini new col')
  col = newCol

  return (
    <View>
      {
        col > 0 ? <Text style={styles.textCol}>{col}</Text> :
        <TextInput
        style={styles.input}
        onChangeText={setNewCol}
        value={newCol}
        maxLength={1}
        keyboardType='number-pad'
        />
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
    width: 35
  },
  input: {
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: '#ddffbc',
    height: 62,
    width: 35,
    borderWidth: 1,
  },
})
