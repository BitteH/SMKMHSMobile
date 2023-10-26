import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/pages/Home';
import Detail from './src/pages/Detail';
import KonfirmasiBurger from './src/pages/KonfirmasiBurger'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown: false}} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="KonfirmasiBurger" component={KonfirmasiBurger} />
      </Stack.Navigator>
      </NavigationContainer> 
  
  );
};

export default App;