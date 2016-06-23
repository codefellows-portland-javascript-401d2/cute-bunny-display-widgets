import template from './toggle.html';
import style from './toggle.scss';

export default {
  template,
  controllerAs: 'toggler',

  bindings: {
    images: '='
  },
  controller: function() {
    this.toggle = 'thumb';
    this.style = style;
  }
};