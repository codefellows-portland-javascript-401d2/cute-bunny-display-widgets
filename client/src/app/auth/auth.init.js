authInit.$inject = ['$rootScope', '$state', 'authService'];

export default function authInit($rootScope, $state, authService) {
  $rootScope.$on('$stateChangeStart', (event, toState) => {
    if (toState.data && toState.data.requireAuth && !authService.isSignedIn()) {
      event.preventDefault();

      $state.go('signin');
    }
  });
}
