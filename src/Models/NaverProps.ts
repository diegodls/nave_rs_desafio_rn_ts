import { ImageSourcePropType } from 'react-native';

export interface NaverProps {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  user_id: string;
  project: string;
  birthdate: string;
  url: ImageSourcePropType;
}

export interface NaverPropsArray {
  data: NaverProps[];
}
