import React from 'react';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import SingleCategoryView from '../views/SingleCategoryView';

import CategoryView from '../views/CategoryView';


const Stack = createStackNavigator();

const CategoryStack = () => {
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
        component={CategoryView}
        options={({ navigation }) => ({
          title: 'CATEGORIES',
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
        name='Single Category'
        component={SingleCategoryView}
        options={({ navigation }) => ({
          title: 'Back',
          headerLeft: () => (
            <AntDesign
              name='arrowleft'
              style={{ color: '#CEC269', paddingLeft: 15 }}
              size={24}
              onPress={() => {
                navigation.navigate('single-category-view', {
                  category: category,
                });
                store.dispatch({ type: 'RESET_ERROR' });
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default CategoryStack;

const styles = StyleSheet.create({});
