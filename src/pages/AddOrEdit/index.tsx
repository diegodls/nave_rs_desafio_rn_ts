import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Click, Text } from './styles';

//CONTEXT
import { useAuthContext } from '../../contexts/auth';

const AddOrEdit: React.FC = () => {
  //CONST
  const navigation = useNavigation();

  const { token } = useAuthContext();

  return (
    <Container>
      <Click
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        <Text>AddOrEdit</Text>
      </Click>
      <Click
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Back</Text>
      </Click>
      <Text>Token: {token}</Text>
    </Container>
  );
};

export default AddOrEdit;
