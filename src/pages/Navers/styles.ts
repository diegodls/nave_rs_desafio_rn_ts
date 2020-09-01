import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import colors from '../../styles/colors';
import { NaverProps } from '../../Models/NaverProps';

interface Props {
  title?: boolean;
  center?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 95%;
  padding-top: 28px;
`;

export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 28px;
`;

export const TitleTextContainer = styled.View<Props>`
  width: 155px;
  height: 40px;
`;

export const TitleText = styled.Text`
  font-family: Montserrat-Regular;
  font-size: 22px;
  line-height: 32px;
  color: ${colors.secondary};
`;

export const AddButton = styled.TouchableWithoutFeedback``;

export const AddButtonContainer = styled.View`
  width: 155px;
  height: 40px;
  background-color: ${colors.secondary};
  align-items: center;
  justify-content: center;
`;

export const AddButtonText = styled.Text`
  font-family: Montserrat-Regular;
  color: ${colors.primary};
`;

export const List = styled(FlatList as new () => FlatList<NaverProps>)`
  flex: 1;
  width: 100%;
  padding-bottom: 28px;
`;
