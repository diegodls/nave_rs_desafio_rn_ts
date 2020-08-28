import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuthContext } from '../contexts/auth';

import Splash from '../pages/Splash';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuthContext();

  return (
    <NavigationContainer>
      {loading ? <Splash /> : signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
