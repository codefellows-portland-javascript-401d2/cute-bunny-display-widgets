import template from './app.html';

export default {
  template,
  controllerAs: 'app',
  controller: function($state) {
    this.$state = $state;
  }
    
};