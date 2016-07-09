import template from './user-auth.html';
import style from './user-auth.scss';

export default {
  template,
  bindings: {
    success: '&'
  },
  controller: function(userService) {
    this.style = style;
    this.loginForm = {};
    this.registerForm = {};

    this.tryLogin = function() {
      userService.login(this.loginForm)
        .then(() => this.success())
        .catch(err => this.error = err.reason);
    };

    this.tryRegister = function() {
      userService.signup(this.registerForm)
        .then(() => this.success())
        .catch(err => this.error = err.reason);
    };
  }
};