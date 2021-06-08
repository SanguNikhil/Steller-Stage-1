import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftScreen from './screens/SpaceCrafts';
import HomeScreen from './screens/HomeScreen';
import StarMapScreen from './screens/StarMap';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Space Crafts" component={SpaceCraftScreen}/>
        <Stack.Screen name="Daily Pic" component={DailyPicScreen}/>
        <Stack.Screen name="Star Map" component={StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

export default App;
