import template from './display-thumb.html';
import style from './thumb.css';

export default {
  template,
  controllerAs: 'thumb',
  bindings: {
    source: '='
  },
  controller: function() {
    this.style = style;
  }
};