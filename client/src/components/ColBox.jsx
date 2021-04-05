import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function ColBox(props) {
  const { col } = props
  const [number, setNumber] = useState(0)

  return (
    <View>
      {
        col > 0 ? <Text style={styles.textCol}>{col}</Text> :
        <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        maxLength={1}
        keyboardType="phone-pad"
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
