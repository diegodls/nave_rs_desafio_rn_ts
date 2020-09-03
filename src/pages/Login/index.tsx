import React, { useEffect, useState } from 'react';
import {
  Container,
  TextContainer,
  LogoContainer,
  ContentContainer,
  Text,
  TextInput,
  ButtonContainer,
  Button,
  Modal,
  ModalContainer,
  ModalBackground,
  ModalTopContainer,
  ModalTitle,
  ModalCloseIcon,
  ModalMessage,
} from './styles';
import Logo from '../../components/Logo';
import { useAuthContext } from '../../contexts/auth';

const Login: React.FC = () => {
  const { logIn, loginError } = useAuthContext();
  const [email, setEmail] = useState<string>('user001@nave.rs');
  const [password, setPassword] = useState<string>('user001');
  const [visible, setVisible] = useState<boolean>(false);

  //FUNCTIONS
  function handleLogin() {
    logIn(email, password);
  }

  function closeModal() {
    setVisible(false);
  }

  useEffect(() => {
    if (loginError) {
      setVisible(true);
    }
  }, [loginError]);

  return (
    <Container>
      <Modal visible={visible} animationType={'fade'} transparent={true}>
        <ModalBackground>
          <ModalContainer>
            <ModalTopContainer>
              <ModalTitle>Erro ao logar</ModalTitle>
              <Button onPress={closeModal}>
                <ModalCloseIcon
                  source={require('../../assets/img/icons/close.png')}
                />
              </Button>
            </ModalTopContainer>
            <ModalMessage>
              {loginError !== undefined
                ? loginError.message
                : 'Tente novamente mais tarde!'}
            </ModalMessage>
          </ModalContainer>
        </ModalBackground>
      </Modal>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ContentContainer>
        <TextContainer email>
          <Text>E-mail</Text>
          <TextInput
            placeholder="E-mail"
            value={email}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />
        </TextContainer>
        <TextContainer password>
          <Text>Senha</Text>
          <TextInput
            placeholder="Senha"
            value={password}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setPassword(text)}
          />
        </TextContainer>
        <Button onPress={handleLogin}>
          <ButtonContainer>
            <Text button>Entrar</Text>
          </ButtonContainer>
        </Button>
      </ContentContainer>
    </Container>
  );
};

export default Login;
/**
 * !TODO:
 * ! Adicionar um componente 'carregando' padrão
 * ! refatorar para diminuir os styled
 * ! Tratar os dados de maneira correta
 * ! Transformar o Modal em um componente
 * ! usar forms
 */
