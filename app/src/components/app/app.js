// import angular from 'angular';
import template from './app.html';
import styles from './app.scss';

export default {
  template: template,
  controllerAs: 'app',
  bindings: {
  },
  controller: function(){
    this.styles = styles;
  }
};
