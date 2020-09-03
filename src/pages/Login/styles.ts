import styled from 'styled-components/native';
import colors from '../../styles/colors';

interface Props {
  button?: boolean;
  email?: boolean;
  password?: boolean;
}

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`;

export const LogoContainer = styled.View`
  flex: 1;
  justify-content: center;
  top: 16px;
`;

export const ContentContainer = styled.View`
  flex: 2;
  width: 95%;
  align-items: center;
`;

export const TextContainer = styled.View<Props>`
  width: 100%;
  ${({ email, password }) => {
    switch (true) {
      case email:
        return 'margin-bottom: 32px;';
      case password:
        return 'margin-bottom: 40px;';
    }
  }}
`;

export const Text = styled.Text<Props>`
  font-size: 14px;
  line-height: 18px;
  font-family: Montserrat-Regular;

  ${({ button }) => {
    switch (true) {
      case button:
        return `color: ${colors.white};`;
      case !button:
        return 'margin-bottom: 4px;';
    }
  }}
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: colors.placeholder,
})`
  width: 100%;
  height: 40px;
  padding: 8px;
  background-color: ${colors.white};
  border-width: 1px;
  border-color: ${colors.border};
  font-family: Montserrat-Regular;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary};
  width: 100%;
  height: 40px;
`;
export const Button = styled.TouchableWithoutFeedback``;

export const Modal = styled.Modal``;

export const ModalBackground = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.dark_opacity};
`;

export const ModalContainer = styled.View`
  width: 95%;
  background-color: ${colors.white};
  padding: 21px;
`;

export const ModalTopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ModalTitle = styled.Text`
  color: ${colors.secondary};
  font-size: 22px;
  line-height: 32px;
  font-family: Montserrat-Regular;
`;

export const ModalCloseIcon = styled.Image``;

export const ModalMessage = styled.Text``;
