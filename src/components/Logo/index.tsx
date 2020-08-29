import React from 'react';
import { Container, Image } from './styles';

const Logo: React.FC = () => {
  return (
    <Container>
      <Image source={require('../../assets/img/logo/logo.png')} />
    </Container>
  );
};

export default Logo;
