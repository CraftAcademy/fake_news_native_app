import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import SingleBackyardView from '../views/SingleBackyardView';

import BackyardView from '../views/BackyardView';

const Stack = createStackNavigator();

const BackyardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: '#111518',
        },
        headerTintColor: '#CEC269',
      })}>
      <Stack.Screen
        name='backyard-home'
        component={BackyardView}
        options={({ navigation }) => ({
          title: 'BACKYARD',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <AntDesign
              testID='drawer-menu'
              name='menu-fold'
              style={{ color: '#CEC269', paddingLeft: 15 }}
              size={24}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name='backyard-article'
        component={SingleBackyardView}
        options={({ navigation }) => ({
          title: 'Back',
          headerLeft: () => (
            <AntDesign
              name='arrowleft'
              style={{ color: '#CEC269', paddingLeft: 15 }}
              size={24}
              onPress={() => {
                navigation.navigate('backyard-home');
                store.dispatch({ type: 'RESET_ERROR' });
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default BackyardStack;
