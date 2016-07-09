userService.$inject = ['tokenService', '$http', 'apiUrl'];

export default function userService(tokenSvc, $http, apiUrl) {

  const current = tokenSvc.retrieve();
  if (current) {
    $http.get(`${apiUrl}/auth/verify`)
      .catch(() => tokenSvc.destroy());
  }

  return {

    isAuthenticated() {
      return !!tokenSvc.retrieve();
    },

    logout() {
      tokenSvc.destroy();
    },

    login(credentials) {
      return $http.post(`${apiUrl}/auth/login`, credentials)
        .then( result => {
          tokenSvc.set(result.data.token);
        });
    },

    signup(credentials) {
      return $http.post(`${apiUrl}/auth/signup`, credentials)
        .then(result => {
          tokenSvc.set(result.data.token);
        });
    }

  };
}