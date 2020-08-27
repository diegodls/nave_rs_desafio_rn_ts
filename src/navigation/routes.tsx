import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//PAGES
import Login from '../pages/Login';
import Navers from '../pages/Navers';
import Detail from '../pages/Detail';

//INTERFACES

//COMPONENTS
function Logo() {
  return <Image source={require('../assets/img/logo/logo.png')} />;
}

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FAFAFA',
        },
      }}>
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Navers'}
        component={Navers}
        options={{
          headerTitle: (props: any) => <Logo {...props} />,
        }}
      />
      <Stack.Screen
        name={'Detail'}
        component={Detail}
        options={{
          headerTitle: (props: any) => <Logo {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={'Navers'} component={Routes} />
        <Drawer.Screen name={'Sair'} component={Routes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;

/**
 * !Separar as stacks
 */
