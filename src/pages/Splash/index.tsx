import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const Splash: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'#666'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
