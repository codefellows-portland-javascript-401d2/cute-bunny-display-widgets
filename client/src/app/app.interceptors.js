import authInterceptor from './auth/auth.interceptor';

interceptors.$inject = ['$httpProvider'];

export default function interceptors($httpProvider) {
  $httpProvider.interceptors.push(authInterceptor);
}
