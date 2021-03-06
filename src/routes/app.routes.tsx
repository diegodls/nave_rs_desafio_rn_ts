import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
//PAGES
import Navers from '../pages/Navers';
import Detail from '../pages/Detail';
import Add from '../pages/Add';
import Edit from '../pages/Edit';
//COMPONENTS
import Logo from '../components/Logo';
import ToggleDrawer from '../components/ToggleDrawer';
import CustomBackButton from '../components/CustomBackButton';
//STYLES
import colors from '../styles/colors';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator
    screenOptions={{
      headerTitleStyle: { alignSelf: 'center' },
      headerStyle: { backgroundColor: colors.navBar },
      headerTitle: () => <Logo />,
      headerLeftContainerStyle: { left: 17 },
      headerBackTitleVisible: false,
      headerBackImage: () => <CustomBackButton />,
      headerRight: () => <View />,
    }}>
    <AppStack.Screen
      name="Navers"
      component={Navers}
      options={({ navigation }) => ({
        headerLeft: () => <ToggleDrawer {...navigation} />,
      })}
    />
    <AppStack.Screen name="Detail" component={Detail} />
    <AppStack.Screen name="Add" component={Add} />
    <AppStack.Screen name="Edit" component={Edit} />
  </AppStack.Navigator>
);

export default AppRoutes;
