// import angular from 'angular';
import template from './app.html';

export default {
  template: template,
  controllerAs: 'app',
  bindings: {
    // something: '=',
    doSomething: '&'
  },
  controller: function(){
    // this.something = 'here we go';
    this.doSomething = () => {
      this.something = 'alas a thing';
      console.log('done it');
    };
  }
};
