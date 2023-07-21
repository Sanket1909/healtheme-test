import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/login'; 
import Signup from './src/signup'; 
import Home from "./src/home"

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false, 
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false, // Hide the header for the Signup screen
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


