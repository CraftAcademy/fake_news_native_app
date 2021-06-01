import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import MainView from '../views/MainView';
import SingleArticleView from '../views/SingleArticleView';
import SingleCategoryView from '../views/SingleCategoryView';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import LoginView from '../views/LoginView';
import store from '../state/store/configureStore';

const Stack = createStackNavigator();

const HomeStack = () => {
  const { category } = useSelector((state) => state);

  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: '#111518',
        },
        headerTintColor: '#CEC269',
      })}>
      <Stack.Screen
        name='home'
        component={MainView}
        options={({ navigation }) => ({
          title: 'FAKE ? NEWS',
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
        name='logIn'
        component={LoginView}
        options={({ navigation }) => ({
          title: 'Back',
          headerLeft: () => (
            <AntDesign
              name='arrowleft'
              style={{ color: '#CEC269', paddingLeft: 15 }}
              size={24}
              onPress={() => {
                navigation.navigate('home');
                store.dispatch({ type: 'RESET_ERROR' });
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name='single-article'
        component={SingleArticleView}
        options={({ navigation }) => ({
          title: 'Back',
          headerLeft: () => (
            <AntDesign
              name='arrowleft'
              style={{ color: '#CEC269', paddingLeft: 15 }}
              size={24}
              onPress={() => {
                navigation.navigate('home');
                store.dispatch({ type: 'RESET_ERROR' });
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name='single-category-view'
        component={SingleCategoryView}
        options={() => ({ title: category })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
