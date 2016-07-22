authService.$inject = ['tokenService', '$http', 'apiUrl'];

export default function authService(tokenService, $http, apiUrl) {
  let currentToken = tokenService.getToken();

  if (currentToken) {
    $http
      .get(`${apiUrl}/auth/verify`)
      .catch(() => tokenService.removeToken());
  }

  return {
    isSignedIn() {
      return !!tokenService.getToken();
    },
    signin(credentials) {
      return $http
        .post(`${apiUrl}/auth/signin`, credentials)
        .then(res => {
          tokenService.setToken(res.data.result);

          return res.data;
        })
        .catch(res => res.data);
    },
    signout() {
      tokenService.removeToken();
    },
    signup(credentials) {
      return $http
        .post(`${apiUrl}/auth/signup`, credentials)
        .then(res => tokenService.setToken(res.data.result))
        .catch(res => res.data.result);
    }
  };
}
