import template from './display-full.html';
import style from './full.scss';

export default {
  template,
  controllerAs: 'full',
  bindings: {
    postTitle: '=',
    source: '=',
    description: '='
  },
  controller: function() {
    this.style = style;
  }
};