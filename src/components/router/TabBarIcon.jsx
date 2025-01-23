import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabBarIcon = ({name, color, size}) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default TabBarIcon;
