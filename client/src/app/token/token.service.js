tokenService.$inject = ['$window', 'tokenName'];

export default function tokenService($window, tokenName) {
  return {
    getToken() {
      return $window.localStorage.getItem(tokenName);
    },
    removeToken() {
      $window.localStorage.removeItem(tokenName);
    },
    setToken(token) {
      $window.localStorage.setItem(tokenName, token);
    }
  };
}
