import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameBoard from './src/pages/GameBoard'
import { Provider } from 'react-redux'
import store from './src/store/'

export default function App() {

  return (
    <View style={styles.container}>
        <Provider store={store}>
          <GameBoard />
          <StatusBar style="auto" />
        </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
