import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAuthContext } from '../../contexts/auth';

const Login: React.FC = () => {
  //CONST
  const navigation = useNavigation();

  const { signed, logIn } = useAuthContext();
  console.log(signed);

  //FUNCTIONS
  function handleLogin() {
    logIn();
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
