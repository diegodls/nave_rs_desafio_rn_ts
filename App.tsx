import React from 'react';
import Routes from './src/routes/index';
import { AuthProvider } from './src/contexts/auth';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
