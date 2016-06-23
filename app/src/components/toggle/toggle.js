import template from './toggle.html';
// import style from './toggle.css';

export default {
  template,
  controllerAs: 'toggler',

  bindings: {
    image: '='
  },
  controller: function() {
    this.toggle = 'text';
  }
};