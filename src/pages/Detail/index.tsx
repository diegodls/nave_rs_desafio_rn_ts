import React, { useEffect, useState } from 'react';
import {
  Container,
  ContentContainer,
  Image,
  TextContainer,
  Text,
  Row,
  Button,
  ButtonContainer,
  Modal,
  ModalContainer,
  ModalBackground,
  ModalTopContainer,
  ModalTitle,
  ModalCloseIcon,
  ModalMessage,
} from './styles';

//INTERFACE
import { NaverProps } from '../../Models/NaverProps';
import { useRoute, useNavigation } from '@react-navigation/native';

//API
import api from '../../services/api';

//CONTEXT
//import { useAuthContext } from '../../contexts/auth';

const Detail: React.FC = () => {
  //HOOKS
  const route = useRoute();
  const navigation = useNavigation();

  //ROUTE_PARAMS
  //const routeParams = route.params as Params;
  //const item = routeParams.item;
  const id: string = route.params!.id;

  //CONST
  const [naverData, setNaverData] = useState<NaverProps>();
  const [loading, setLoading] = useState<boolean>(true);
  const [loadDataError, setLoadDataError] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  //USE_EFFECT
  useEffect(() => {
    setLoading(true);
    async function loadData() {
      await api
        .get<NaverProps>(`/navers/${id}`)
        .then((response) => {
          if (response.status !== 200) {
            console.log(response);
            throw new Error(String(response.status));
          } else {
            setNaverData(response.data);
            console.log(response.data);
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
  }, [id]);

  //FUNCTIONS
  function showModal() {
    setModalVisible(!modalVisible);
  }
  async function handleDelete() {
    await api.delete(`/navers/${id}`).then((response) => {
      console.log(response.status);
      navigation.goBack();
    });
  }

  function handleEdit() {
    console.log(id);
  }
  return (
    <Container>
      {loading ? (
        <>
          {loadDataError ? (
            <Text message>Erro</Text>
          ) : (
            <Text message>Carregando</Text>
          )}
        </>
      ) : (
        <>
          {naverData && (
            <>
              <Image avatar source={require('../../assets/img/naver.png')} />
              <ContentContainer>
                <TextContainer>
                  <Text name>{naverData.name}</Text>
                  <Text answer>{naverData.job_role}</Text>
                </TextContainer>
                <TextContainer>
                  <Text title>Idade</Text>
                  <Text answer>{naverData.birthdate.substring(0, 10)}</Text>
                </TextContainer>
                <TextContainer>
                  <Text title>Tempo de Empresa</Text>
                  <Text answer>
                    {naverData.admission_date.substring(0, 10)}
                  </Text>
                </TextContainer>
                <TextContainer>
                  <Text title>Projetos que participou</Text>
                  <Text answer>{naverData.project}</Text>
                </TextContainer>
                <Row>
                  <Button onPress={showModal}>
                    <ButtonContainer outline>
                      <Image
                        icon
                        source={require('../../assets/img/icons/delete.png')}
                      />
                      <Text dark>Excluir</Text>
                    </ButtonContainer>
                  </Button>
                  <Button onPress={handleEdit}>
                    <ButtonContainer normal>
                      <Image
                        icon
                        source={require('../../assets/img/icons/edit_w.png')}
                      />
                      <Text light>Editar</Text>
                    </ButtonContainer>
                  </Button>
                </Row>
                <Modal
                  visible={modalVisible}
                  animationType={'fade'}
                  transparent={true}>
                  <ModalBackground>
                    <ModalContainer>
                      <ModalTopContainer>
                        <ModalTitle>Excluir naver</ModalTitle>
                        <Button onPress={showModal}>
                          <ModalCloseIcon
                            source={require('../../assets/img/icons/close.png')}
                          />
                        </Button>
                      </ModalTopContainer>
                      <ModalMessage>
                        <Text>Tem certeza que deseja excluir este naver?</Text>
                        <Row>
                          <Button onPress={showModal}>
                            <ButtonContainer outline>
                              <Text dark>Cancelar</Text>
                            </ButtonContainer>
                          </Button>
                          <Button onPress={handleDelete}>
                            <ButtonContainer normal>
                              <Text light>Excluir</Text>
                            </ButtonContainer>
                          </Button>
                        </Row>
                      </ModalMessage>
                    </ModalContainer>
                  </ModalBackground>
                </Modal>
              </ContentContainer>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Detail;

/**
 * !TODO:
 * ! Adicionar um componente 'carregando' padrão
 * ! isolar a lógica da view
 * ! Tratar os dados de maneira correta(datas)
 * ! Verificar uri da imagem
 * ! Transformar o Modal em um componente(e dividir a view em 3 para adicionar o fechar ao clicar fora)
 * ! Criar o DataContext e colocar os Navers lá.
 */
