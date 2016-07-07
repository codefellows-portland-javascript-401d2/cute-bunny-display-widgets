import template from './app.html';

export default {
  template,
  controllerAs: 'app',
  controller: function($state, userService) {
    this.$state = $state;
    this.logout = userService.logout;
    this.isAuth = userService.isAuthenticated;
  }
    
};