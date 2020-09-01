import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;
export const TitleContainer = styled.View`
  width: 100%;
`;
export const Title = styled.Text`
  font-family: Montserrat-Regular;
  font-size: 22px;
  line-height: 32px;
  color: ${colors.secondary};
`;
export const AddButton = styled.TouchableWithoutFeedback``;
export const AddButtonContainer = styled.View``;
export const AddButtonText = styled.Text``;
