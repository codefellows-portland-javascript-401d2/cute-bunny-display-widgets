signupController.$inject = ['$state', 'authService'];

export default function signupController($state, authService) {
  this.credentials = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  };

  this.signup = () => {
    return authService
      .signup(this.credentials)
      .then(() => {
        $state.go('album-list');
      })
      .catch(error => {
        this.error = error;
        return false;
      });
  };
}
