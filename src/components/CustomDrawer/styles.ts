import { Platform } from 'react-native';
import styled from 'styled-components/native';

import colors from '../../styles/colors';

const statusHeight = Platform.OS === 'ios' ? 15 : 20;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primary};
`;

export const DrawerContainer = styled.View`
  left: 17px;
  top: ${statusHeight}px;
  justify-content: center;
`;

export const ItemContainer = styled.View`
  flex: 1;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const ButtonClick = styled.TouchableWithoutFeedback``;

export const ButtonContainer = styled.View`
  width: 198px;
  height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
`;

export const ButtonTextText = styled.Text`
  font-family: Montserrat-Regular;
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
  color: ${colors.secondary};
`;
