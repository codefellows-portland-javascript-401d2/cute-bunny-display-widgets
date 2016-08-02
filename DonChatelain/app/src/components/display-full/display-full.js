import template from './display-full.html';
import style from './full.scss';

export default {
  template,
  controllerAs: 'full',
  transclude: true,
  bindings: {
    postTitle: '=',
    source: '=',
    description: '=',
    album: '='
  },
  controller: function() {
    this.style = style;
  }
};