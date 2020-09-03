import styled from 'styled-components/native';
import colors from '../../styles/colors';

interface Props {
  message?: boolean;
  name?: boolean;
  answer?: boolean;
  title?: boolean;
  normal?: boolean;
  outline?: boolean;
  dark?: boolean;
  light?: boolean;
  avatar?: boolean;
  icon?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;
export const ContentContainer = styled.View`
  flex: 1;
  width: 95%;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;

export const Image = styled.Image<Props>`
  ${({ avatar, icon }) => {
    switch (true) {
      case avatar:
        return `
        height: 300px;
        width: 100%;`;
      case icon:
        return `
        height: 18px;
        width: 18px;
        margin-right: 13px;`;
    }
  }}
`;
export const TextContainer = styled.View`
  margin-top: 24px;
`;

export const Text = styled.Text<Props>`
  font-family: Montserrat-ExtraLight;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.secondary};

  ${({ message, name, answer, title, dark, light }) => {
    switch (true) {
      case message:
        return `
        font-family: Montserrat-Regular; 
        font-size: 22px;
    
        color: ${colors.secondary};`;
      case name:
        return `
        font-family: Montserrat-Regular;
        font-size: 22px;
       
        color: ${colors.secondary};`;
      case answer:
        return `
        font-family: Montserrat-ExtraLight;
        font-size: 16px;
       
        color: ${colors.secondary};`;
      case title:
        return `
        font-family: Montserrat-Regular;
        font-size: 16px;
    
        color: ${colors.secondary};`;
      case dark:
        return `
        font-family: Montserrat-Regular;
        font-size: 16px;
     
        color: ${colors.secondary};`;
      case light:
        return `
          font-family: Montserrat-Regular;
          font-size: 16px;
     
          color: ${colors.white};`;
    }
  }}
`;

export const Button = styled.TouchableWithoutFeedback``;

export const ButtonContainer = styled.View<Props>`
  justify-content: center;
  align-items: center;
  padding: 8px 40px;
  max-height: 40px;
  ${({ normal, outline }) => {
    switch (true) {
      case normal:
        return `          
          background-color: ${colors.secondary};
          flex-direction: row;`;
      case outline:
        return `
        border-width: 1px;
        border-color: ${colors.border};
        flex-direction: row;
        `;
    }
  }}
`;

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

export const ModalMessage = styled.View``;
