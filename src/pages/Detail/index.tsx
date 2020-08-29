import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//CONTEXT
import { useAuthContext } from '../../contexts/auth';

const Detail: React.FC = () => {
  //CONST
  const navigation = useNavigation();

  const { token } = useAuthContext();

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('AddOrEdit');
          }}>
          <Text>Detail</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>Back</Text>
        </TouchableWithoutFeedback>
        <Text>Token: {token}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Detail;
