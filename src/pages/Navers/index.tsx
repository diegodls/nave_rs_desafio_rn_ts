import React, { useEffect, useState } from 'react';
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

//API
import api from '../../services/api';

//INTERFACES
import { NaverProps } from '../../Models/NaverProps';

//COMPONENTS
import NaversCard from '../../components/NaversCard';

const Navers: React.FC = () => {
  //HOOKS
  const navigation = useNavigation();

  //STATES
  const [naversData, setNaversData] = useState<NaverProps[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadDataError, setLoadDataError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function loadData() {
      await api
        .get<NaverProps[]>('/navers')
        .then((response) => {
          if (response.status !== 200) {
            console.log(response.data);
            throw new Error(String(response.status));
          } else {
            setNaversData(response.data);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoadDataError(true);
          setLoading(false);
        });
    }
    loadData();
  }, []);

  function handleNavigation() {
    navigation.navigate('AddOrEdit');
  }

  return (
    <Container>
      {!loading ? (
        <>
          {loadDataError ? (
            <TitleText>Erro</TitleText>
          ) : (
            <InnerContainer>
              <TitleContainer>
                <TitleTextContainer title>
                  <TitleText>Navers</TitleText>
                  <TitleText>
                    {naversData !== null ? naversData.length : '0'}
                  </TitleText>
                </TitleTextContainer>
                <AddButton>
                  <AddButtonContainer>
                    <AddButtonText onPress={handleNavigation}>
                      Adicionar naver
                    </AddButtonText>
                  </AddButtonContainer>
                </AddButton>
              </TitleContainer>
              <List
                data={naversData}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }: { item: NaverProps }) => (
                  <NaversCard {...item} />
                )}
              />
            </InnerContainer>
          )}
        </>
      ) : (
        <TitleText>Carregando</TitleText>
      )}
    </Container>
  );
};

export default Navers;
