import React from 'react';
import { Container, Image } from './styles';

const CustomBackButton: React.FC = () => {
  return (
    <Container>
      <Image source={require('../../assets/img/icons/back.png')} />
    </Container>
  );
};

export default CustomBackButton;
