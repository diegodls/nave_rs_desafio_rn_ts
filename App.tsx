import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes/index';
import { AuthProvider } from './src/contexts/auth';

import colors from './src/styles/colors';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.primary} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};

export default App;
