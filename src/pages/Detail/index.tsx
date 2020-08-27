import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Detail = () => {
  //CONST
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Detail');
          }}>
          <Text>Detail</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>Back</Text>
        </TouchableWithoutFeedback>
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
