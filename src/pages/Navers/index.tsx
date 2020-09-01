import React from 'react';
import {
  Container,
  InnerContainer,
  TitleTextContainer,
  TitleContainer,
  TitleText,
  AddButton,
  AddButtonContainer,
  AddButtonText,
  List,
} from './styles';
import { useNavigation } from '@react-navigation/native';

//CONTEXT
import { useAuthContext } from '../../contexts/auth';

//MOCKED
import data from './data';

//COMPONENTS
import NaversCard from '../../components/NaversCard';

const Navers: React.FC = () => {
  //CONST
  const navigation = useNavigation();
  const { token } = useAuthContext();

  return (
    <Container>
      <InnerContainer>
        <TitleContainer>
          <TitleTextContainer title>
            <TitleText>Navers</TitleText>
          </TitleTextContainer>
          <AddButton>
            <AddButtonContainer>
              <AddButtonText>Adicionar naver</AddButtonText>
            </AddButtonContainer>
          </AddButton>
        </TitleContainer>
        <List
          data={data}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.name)}
          renderItem={({ item }) => <NaversCard {...item} />}
        />
      </InnerContainer>
    </Container>
  );
};

export default Navers;
