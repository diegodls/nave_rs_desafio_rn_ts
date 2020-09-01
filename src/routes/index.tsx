import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuthContext } from '../contexts/auth';

import Splash from '../pages/Splash';
import AuthRoutes from './auth.routes';
import DrawerRoutes from './app.drawer';

const Routes: React.FC = () => {
  const { signed, loading } = useAuthContext();

  return (
    <NavigationContainer>
      {loading ? <Splash /> : signed ? <DrawerRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
