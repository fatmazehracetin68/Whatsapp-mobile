import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from './src/router/RouteNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <RouteNavigation />
    </NavigationContainer>
  );
}
