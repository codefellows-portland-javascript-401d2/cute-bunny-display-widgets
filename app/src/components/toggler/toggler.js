import template from './toggler.html';
import style from './toggler.scss';

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