import template from './display-thumb.html';
import style from './thumb.scss';

export default {
  template,
  controllerAs: 'thumb',
  transclude: true,
  bindings: {
    source: '=',
    postTitle: '='
  },
  controller: function() {
    this.style = style;
    this.hoverOn = false;
  }
};