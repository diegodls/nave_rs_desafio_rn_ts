import styled from 'styled-components/native';
import colors from '../../styles/colors';

interface Props {
  name?: boolean;
  job_role?: boolean;
  delete?: boolean;
  edit?: boolean;
}

export const Container = styled.View`
  align-items: center;
  width: 50%;
  height: auto;
  margin-bottom: 26px;
`;

export const Image = styled.Image`
  width: 158px;
  height: 158px;
  /* resizeMode: contain; */
`;

export const Wrapper = styled.View``;
export const ContentContainer = styled.View``;

export const Text = styled.Text<Props>`
  color: ${colors.secondary};
  font-size: 14px;
  line-height: 20px;

  font-family: Montserrat-Regular;

  ${({ name, job_role }) => {
    switch (true) {
      case name:
        return 'font-family: Montserrat-Regular; line-height: 20px; margin-bottom: 4px; margin-top: 8px';
      case job_role:
        return 'font-family: Montserrat-ExtraLight; line-height: 16px; margin-bottom: 10px;';
    }
  }}
`;

export const IconContainer = styled.View`
  flex-direction: row;
`;

export const Click = styled.TouchableWithoutFeedback``;

export const DeleteIcon = styled.Image`
  width: 14px;
  height: 18px;
  margin-right: 24px;
`;
export const EditIcon = styled.Image`
  width: 18px;
  height: 18px;
`;
