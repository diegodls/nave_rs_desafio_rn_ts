import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  KeyboardAvoidingView,
  InnerContainer,
  Button,
  ButtonContainer,
  Text,
  TextField,
  TextInput,
} from './styles';

const Edit: React.FC = () => {
  //CONST
  const navigation = useNavigation();

  //STATES
  const [name, setName] = useState<string>('');
  const [job_role, setJob_role] = useState<string>('');
  const [birthdate, setBirthdate] = useState<string>('');
  const [admission_date, setAdmission_date] = useState<string>('');
  const [project, setProject] = useState<string>('');
  const [url, setUrl] = useState<string>('');

  return (
    <KeyboardAvoidingView
      contentContainerStyle={{
        paddingTop: 32,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <InnerContainer>
        <Text title>Editar naver</Text>
        <TextField>
          <Text label>Nome</Text>
          <TextInput
            placeholder="Nome"
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </TextField>
        <TextField>
          <Text label>Cargo</Text>
          <TextInput
            placeholder="Cargo"
            onChangeText={(text) => setJob_role(text)}
            value={job_role}
          />
        </TextField>
        <TextField>
          <Text label>Idade</Text>
          <TextInput
            placeholder="Idade"
            onChangeText={(text) => setBirthdate(text)}
            value={birthdate}
          />
        </TextField>
        <TextField>
          <Text label>Tempo de empresa</Text>
          <TextInput
            placeholder="Tempo de empresa"
            onChangeText={(text) => setAdmission_date(text)}
            value={admission_date}
          />
        </TextField>
        <TextField>
          <Text label>Projetos que participou</Text>
          <TextInput
            placeholder="Projetos que participou"
            onChangeText={(text) => setProject(text)}
            value={project}
          />
        </TextField>
        <TextField>
          <Text label>URL da foto do naver</Text>
          <TextInput
            placeholder="URL da foto do naver "
            onChangeText={(text) => setUrl(text)}
            value={url}
          />
        </TextField>
        <Button
          onPress={() => {
            navigation.goBack();
          }}>
          <ButtonContainer>
            <Text button_light>Salvar</Text>
          </ButtonContainer>
        </Button>
      </InnerContainer>
    </KeyboardAvoidingView>
  );
};

export default Edit;

/**
 * !TODO:
 * ! Usar formulários nos TextInput
 * ! Isolar a logíca
 * ! Tratar os dados da maneira correta
 * ! Unificar a tela de Edit com a de ADD, pois são as mesmas.
 * ? NOTAS
 * ? Styled-Components não suporta attrs multi-lines(contentContainerStyle), por isso o inline style...
 */
