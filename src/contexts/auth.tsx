import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
//API
import api from '../services/api';

//INTERFACES
import { ResponseLoginUser, LoggedError } from '../Models/ResponseLoginUser';
import { AuthContextData } from '../Models/AuthContextData';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  //STATES
  const [user, setUser] = useState<ResponseLoginUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loginError, setLoginError] = useState<LoggedError | undefined>();

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

  //FUNCTIONS
  async function logIn(email: string, password: string) {
    try {
      const response = await api.post<ResponseLoginUser>('/users/login', {
        email,
        password,
      });

      setUser(response.data);
      setToken(response.data.token);
      setLoginError(undefined);

      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      await AsyncStorage.setItem('@Navers:user', JSON.stringify(response.data));
      await AsyncStorage.setItem('@Navers:token', response.data.token);

      return response.data;
    } catch (err) {
      if (err.response) {
        setLoginError(err.response.data);
        return err.response.data;
      }
    }
  }

  function logOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        loginError,
        user,
        token,
        loading,
        logIn,
        logOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}
