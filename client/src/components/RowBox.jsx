import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ColBox from './ColBox'

export default function SquareBig(props) {
  const { row, i } = props

  return (
    <View>
      <Text>
        {
          row.map((col, index) => {
            return <ColBox col={col} key={index} i={i} j={index} />
          })
        }
      </Text>
    </View>
  )
}
