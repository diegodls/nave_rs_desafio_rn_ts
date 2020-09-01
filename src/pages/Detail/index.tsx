import React from 'react';
import {
  Container,
  TitleContainer,
  Title,
  AddButton,
  AddButtonContainer,
  AddButtonText,
} from './styles';
import { useRoute } from '@react-navigation/native';

//INTERFACE
import { NaverProps } from '../../config/Interfaces';
interface Params {
  item: NaverProps;
}

//CONTEXT
import { useAuthContext } from '../../contexts/auth';

const Detail: React.FC = () => {
  //HOOKS
  const route = useRoute();

  //CONST
  //const routeParams = route.params as Params;
  //const item = routeParams.item;
  const { item } = route.params as Params;

  const { token } = useAuthContext();

  return (
    <Container>
      <TitleContainer>
        <Title>Navers</Title>
        <AddButton>
          <AddButtonContainer>
            <AddButtonText>{item.name}</AddButtonText>
          </AddButtonContainer>
        </AddButton>
      </TitleContainer>
    </Container>
  );
};

export default Detail;
