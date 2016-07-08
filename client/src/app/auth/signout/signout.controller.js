signoutController.$inject = ['$state', 'authService'];

export default function signoutController($state, authService) {
  authService.signout();
  $state.go('home');
}
