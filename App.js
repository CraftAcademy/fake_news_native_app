import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPageScreen from './screens/MainPageScreen';

const Stack = createStackNavigator();

const App = () => {
  const name = 'Fake ? News';
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={name}
          component={MainPageScreen}
          options={() => ({
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              color: '#cec269',
              fontWeight: 'bold',
              textAlign: 'center'
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
