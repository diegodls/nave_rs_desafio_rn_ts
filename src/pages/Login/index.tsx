import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

const Login = () => {
  //CONST
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Navers', params: { token: 'EsseÉoToken' } }],
            });
          }}>
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
