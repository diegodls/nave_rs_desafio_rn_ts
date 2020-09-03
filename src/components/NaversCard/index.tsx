import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Wrapper,
  ContentContainer,
  Text,
  Image,
  IconContainer,
  Click,
  DeleteIcon,
  EditIcon,
} from './styles';

//INTERFACE
import { NaverProps } from '../../Models/NaverProps';

const NaversCard: React.FC<NaverProps> = (item) => {
  //HOOKS
  const navigation = useNavigation();

  //FUNCTIONS
  function handleDetail(id: string) {
    console.log('Clicou em: handleDetail');
    navigation.navigate('Detail', { id });
  }
  function handleDelete() {
    console.log('Clicou em: handleDelete');
  }
  function handleEdit(id: string) {
    console.log('Clicou em: handleDetail');
    navigation.navigate('Detail', { id });
  }

  return (
    <Container>
      <Wrapper>
        <Click
          onPress={() => {
            handleDetail(item.id);
          }}>
          <ContentContainer>
            <Image source={require('../../assets/img/naver.png')} />
            <Text name>{item.name}</Text>
            <Text job_role>{item.job_role}</Text>
          </ContentContainer>
        </Click>
        <IconContainer>
          <Click onPress={handleDelete}>
            <DeleteIcon source={require('../../assets/img/icons/delete.png')} />
          </Click>
          <Click
            onPress={() => {
              handleEdit(item.id);
            }}>
            <EditIcon source={require('../../assets/img/icons/edit.png')} />
          </Click>
        </IconContainer>
      </Wrapper>
    </Container>
  );
};

export default NaversCard;

/**
 * ! Verificar a uri da imagem
 */
