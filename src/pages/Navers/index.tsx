import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAuthContext } from '../../contexts/auth';

const Home: React.FC = () => {
  //CONST
  const navigation = useNavigation();

  const { user, token, logOut } = useAuthContext();

  //FUNCTIONS
  function handlelogOut() {
    logOut();
  }

  console.log(user);

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Detail');
          }}>
          <Text>Home</Text>
        </TouchableWithoutFeedback>
        <Text>{user?.name}</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>Back</Text>
        </TouchableWithoutFeedback>
        <Text>Token: {token}</Text>
        <TouchableWithoutFeedback onPress={handlelogOut}>
          <Text>LogOut</Text>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FC0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
