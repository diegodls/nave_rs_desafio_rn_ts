import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import colors from '../../styles/colors';

interface Props {
  title?: boolean;
  label?: boolean;
  button_light?: boolean;
}

export const KeyboardAvoidingView = styled(KeyboardAwareScrollView)`
  flex: 1;
  background-color: ${colors.primary};
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;
export const InnerContainer = styled.View`
  flex: 1;
  width: 95%;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
export const Button = styled.TouchableWithoutFeedback``;
export const ButtonContainer = styled.View`
  width: 100%;
  height: 40px;
  margin-top: 8px;
  background-color: ${colors.secondary};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text<Props>`
  ${({ title, label, button_light }) => {
    switch (true) {
      case title:
        return `
        font-family: Montserrat-Regular;
        font-size: 22px;
        line-height: 32px;
        margin-bottom: 24px;
        color: ${colors.secondary};`;
      case label:
        return `
        font-family: Montserrat-Regular;
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 4px;
        color: ${colors.secondary};`;
      case button_light:
        return `
        font-family: Montserrat-Regular;
        font-size: 16px;
        margin-bottom: 4px;
        color: ${colors.white};`;
    }
  }}
`;

export const TextField = styled.View`
  width: 100%;
  margin-bottom: 32px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: colors.primary ,
})`
  width: 100%;
  height: 40px;
  padding: 8px;
  background-color: ${colors.white};
  border-width: 1px;
  border-color: ${colors.border};
  font-family: Montserrat-Regular;
`;
