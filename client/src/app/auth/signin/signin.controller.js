signinController.$inject = ['$state', 'authService'];

export default function signinController($state, authService) {
  this.credentials = {
    username: '',
    password: ''
  };

  this.signin = () => {
    return authService
      .signin(this.credentials)
      .then(res => {
        if (res.status === 'success') {
          $state.go('album-list');
        } else {
          this.error = res.result;
        }
      })
      .catch(err => {
        this.error = err;
      });
  };
}
