export interface ResponseLoginUser {
  email: string;
  id: string;
  token: string;
}

export interface LogInUser {
  email: string;
  password: string;
}

export interface LoggedUser {
  email: string;
  id: string;
}

export interface LoggedError {
  name: string;
  message: string;
  statusCode: number;
  errorCode: number;
}
