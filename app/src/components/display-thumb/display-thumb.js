import template from './display-thumb.html';
import style from './thumb.scss';

export default {
  template,
  controllerAs: 'thumb',
  bindings: {
    source: '=',
    postTitle: '='
  },
  controller: function() {
    this.style = style;
    this.hoverOn = false;
  }
};