import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ColBox from './ColBox'

export default function SquareBig(props) {
  const { row } = props
  console.log(row)
  return (
    <View>
      <Text>
        {
          row.map(col => {
            return <ColBox col={col} key={col} />
          })
        }
      </Text>
    </View>
  )
}
