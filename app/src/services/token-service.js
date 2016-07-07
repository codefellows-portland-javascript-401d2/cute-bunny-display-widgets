tokenService.$inject = ['$window'];

const TOKEN_NAME = 'token';

export default function tokenService($window) {
  return {
    retrieve() {
      return $window.localStorage.getItem(TOKEN_NAME);
    },
    destroy() {
      $window.localStorage.removeItem(TOKEN_NAME);
    },
    set(token) {
      $window.localStorage.setItem(TOKEN_NAME, token);
    }
  };
}