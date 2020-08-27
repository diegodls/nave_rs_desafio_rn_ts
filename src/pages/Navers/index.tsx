import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

//INTERFACES
interface Params {
  token: string;
}

const Home = () => {
  //CONST
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Detail');
          }}>
          <Text>Home</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>Back</Text>
        </TouchableWithoutFeedback>

        <Text>Token: {routeParams.token}</Text>
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
