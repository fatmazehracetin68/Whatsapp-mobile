import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import ChatPage from '../screens/ChatPage';

export default function RouteNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="TabNavigator"
        component={TabNavigator}
      />
      <Stack.Screen
        name="ChatPage"
        component={ChatPage}
        options={{title: 'ChatPage', headerBackTitle: 'Chat'}}
      />
    </Stack.Navigator>
  );
}
