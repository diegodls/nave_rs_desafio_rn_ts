import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 50%;
  height: 50%;
  resizeMode: contain;
`;
