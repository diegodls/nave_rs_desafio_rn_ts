import { AxiosResponse } from 'axios';

import { ResponseLoginUser, LoggedError } from './ResponseLoginUser';

export interface AuthContextData {
  token: string | null;
  signed: boolean;
  user: ResponseLoginUser | null;
  loading: boolean;
  loginError: LoggedError | undefined;
  logIn(
    email: string,
    password: string,
  ): Promise<AxiosResponse<ResponseLoginUser>>;
  logOut(): void;
}
