interceptor.$inject = ['$window', 'tokenService'];

export default function interceptor($window, tokenService) {
  return {
    request(config) {
      config.headers = config.headers || {};

      let token = tokenService.getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    responseError(res) {
      if (res.status >= 400 && res.status < 500) {
        tokenService.removeToken();
      }

      return Promise.reject(res);
    }
  };
}
