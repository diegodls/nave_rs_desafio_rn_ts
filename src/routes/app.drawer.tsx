import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppRoutes from './app.routes';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

const DrawerRoutes: React.FC = () => (
  <AppDrawer.Navigator
    drawerContent={(props: any) => <CustomDrawer {...props} />}>
    <AppDrawer.Screen name="Navers" component={AppRoutes} />
  </AppDrawer.Navigator>
);

export default DrawerRoutes;
