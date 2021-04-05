import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function ColBox(props) {
  const { col } = props

  return (
    <View>
      <Text style={styles.textCol}>{col}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textCol: {
    fontSize: 10,
  }
})
