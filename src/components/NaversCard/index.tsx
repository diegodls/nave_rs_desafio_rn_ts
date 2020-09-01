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
import { NaverProps } from '../../config/Interfaces';

const NaversCard: React.FC<NaverProps> = (item) => {
  //HOOKS
  const navigation = useNavigation();

  //FUNCTIONS
  function handleDetail() {
    console.log('Clicou em: handleDetail');
    navigation.navigate('Detail', { item: item });
  }
  function handleDelete() {
    console.log('Clicou em: handleDelete');
  }
  function handleEdit(name: string) {
    console.log('Clicou em: handleDetail');
    navigation.navigate('Detail', { id: name });
  }

  return (
    <Container>
      <Wrapper>
        <Click
          onPress={() => {
            handleDetail();
          }}>
          <ContentContainer>
            <Image source={item.url} />
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
              handleEdit(item.name);
            }}>
            <EditIcon source={require('../../assets/img/icons/edit.png')} />
          </Click>
        </IconContainer>
      </Wrapper>
    </Container>
  );
};

export default NaversCard;
