interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function logIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'sjkdalksjkdlkasjdlkçjaksçklçdjlsjakdlkas',
        user: {
          name: 'teste001',
          email: 'teste001@nave.rs',
        },
      });
    }, 2000);
  });
}
