import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes/index';
import { AuthProvider } from './src/contexts/auth';

import colors from './src/styles/colors';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle={'dark-content'} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};

export default App;
