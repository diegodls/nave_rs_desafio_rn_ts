import React from 'react';
import { Container, Image } from './styles';

const Splash: React.FC = () => {
  return (
    <Container>
      <Image source={require('../../assets/img/icon-nobg.png')} />
    </Container>
  );
};

export default Splash;
