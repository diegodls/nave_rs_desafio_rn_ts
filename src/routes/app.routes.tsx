import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Navers from '../pages/Navers';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Navers" component={Navers} />
  </AppStack.Navigator>
);

export default AppRoutes;
