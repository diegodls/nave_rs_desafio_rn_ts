import React from 'react';
import { Container, IconContainer, Icon } from './styles';

const ToggleDrawer: React.FC = (navigation: any) => {
  return (
    <Container>
      <IconContainer onPress={() => navigation.toggleDrawer()}>
        <Icon source={require('../../assets/img/icons/drawer.png')} />
      </IconContainer>
    </Container>
  );
};

export default ToggleDrawer;
