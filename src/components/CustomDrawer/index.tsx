import React from 'react';
import {
  Container,
  DrawerContainer,
  ItemContainer,
  ButtonContainer,
  ButtonClick,
  ButtonTextText,
} from './styles';
import ToggleDrawer from '../ToggleDrawer';

import { useAuthContext } from '../../contexts/auth';

const CustomDrawer: React.FC = (props: any) => {
  const { logOut } = useAuthContext();

  return (
    <>
      <Container>
        <DrawerContainer>
          <ToggleDrawer {...props.navigation} isActive={true} />
        </DrawerContainer>
        <ItemContainer>
          <ButtonClick onPress={() => props.navigation.navigate('Navers')}>
            <ButtonContainer>
              <ButtonTextText>Navers</ButtonTextText>
            </ButtonContainer>
          </ButtonClick>
          <ButtonClick onPress={logOut}>
            <ButtonContainer>
              <ButtonTextText>Sair</ButtonTextText>
            </ButtonContainer>
          </ButtonClick>
        </ItemContainer>
      </Container>
    </>
  );
};

export default CustomDrawer;
