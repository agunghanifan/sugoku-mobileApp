import { StatusBar } from 'expo-status-bar';
import React from 'react';
import GameBoard from './src/pages/GameBoard'
import Home from './src/pages/Home'
import Finish from './src/pages/Finish'
import { Provider } from 'react-redux'
import store from './src/store/'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar style="auto" />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}
              options={{
                title: 'My home',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}  
            />
            <Stack.Screen name="Game Board" component={GameBoard}
              options={{
                title: 'Game Board',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }} 
            />
            <Stack.Screen name="Finish" component={Finish} />
          </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}