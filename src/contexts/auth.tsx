import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  token: string | null;
  signed: boolean;
  user: User | null;
  loading: boolean;
  logIn(): Promise<void>;
  logOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  //CONST
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  //USE_EFFECT

  useEffect(() => {
    async function loadStorageData() {
      const storedUser = await AsyncStorage.getItem('@Navers:user');
      const storedToken = await AsyncStorage.getItem('@Navers:token');

      if (storedUser && storedToken) {
        api.defaults.headers.Authorization = `Bearer ${storedToken}`;
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    loadStorageData();
  }, []);

  async function logIn() {
    const response = await auth.logIn();
    setUser(response.user);
    setToken(response.token);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@Navers:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@Navers:token', response.token);
  }

  function logOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }
  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, token, loading, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}
