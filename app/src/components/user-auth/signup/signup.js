import template from './signup.html';

export default {
  template,
  bindings: {
    success: '&',
  },
  controller: ['userService', controller]
};

function controller(userService){

  this.credentials = {
    username: '',
    password: ''
  };

  this.authenticate = () => {
    userService.signup(this.credentials)
      .then( () => {
        this.success();
        return true;
      })
      .catch( err => {
        this.error = err;
        return false;
      });
  };
}
