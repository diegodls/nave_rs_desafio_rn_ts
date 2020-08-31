import React, { useState } from 'react';
import {
  Container,
  TextContainer,
  LogoContainer,
  ContentContainer,
  Text,
  TextInput,
  ButtonContainer,
  Button,
} from './styles';
import Logo from '../../components/Logo';
import { useAuthContext } from '../../contexts/auth';

const Login: React.FC = () => {
  const { signed, logIn } = useAuthContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  console.log(signed);

  //FUNCTIONS
  function handleLogin() {
    logIn();
  }

  return (
    <Container>
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
