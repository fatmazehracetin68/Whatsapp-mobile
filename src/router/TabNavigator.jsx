import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Status from '../screens/Status';
import Calls from '../screens/Calls';
import Group from '../screens/Group';
import Chats from '../screens/Chats';
import Settings from '../screens/Settings';

import {Home, Call, Profile2User, Message, Setting} from 'iconsax-react-native'; // Iconsax'tan ikonları içe aktarın

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let IconComponent;

          if (route.name === 'Status') {
            IconComponent = Home; // Home ikonunu kullanarak değiştirebilirsiniz
          } else if (route.name === 'Calls') {
            IconComponent = Call;
          } else if (route.name === 'Group') {
            IconComponent = Profile2User;
          } else if (route.name === 'Chats') {
            IconComponent = Message;
          } else if (route.name === 'Settings') {
            IconComponent = Setting;
          }

          return (
            <IconComponent
              size={size}
              color={color}
              variant={focused ? 'Bold' : 'Outline'}
            />
          );
        },
        tabBarActiveTintColor: 'tomato', // Aktif ikon rengi
        tabBarInactiveTintColor: 'gray', // Pasif ikon rengi
      })}>
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
      <Tab.Screen name="Group" component={Group} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
