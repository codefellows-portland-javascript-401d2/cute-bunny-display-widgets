import template from './user-auth.html';
import style from './user-auth.scss';

export default {
  template,
  bindings: {
    success: '&'
  },
  controller: function(userService) {
    this.style = style;
    this.form = {};
    this.tryLogin = function() {
      userService.login(this.form)
      .then(() => {
        this.success();
      })
      .catch(err => {
        this.error = err.reason;
      });
    };
  }
};